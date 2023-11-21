import { useMemo, useState } from 'react';
import { Snack } from '../../types';
import { Button, Card } from 'react-bootstrap';
import { PossibleBuys } from '../../utils';

import './market.css';

const CREDITSAMOUNT = 60;

export interface MarketInterface {
    rotate: boolean
}

export const Market = (props:MarketInterface) => {
    const {rotate} = props;

    const [credits, setCredits] = useState<number>(CREDITSAMOUNT);
    const [basket, setBasket] = useState<Snack[]>([]);
    const availableSnacks = useMemo<Snack[]>(
        () => PossibleBuys(credits),
        [credits]
    );

    const handleBuySnack = (snack: Snack) => {
        if (credits > 0) {
            setBasket([...basket, snack]);
            setCredits(credits - snack.price);
            console.log(`Bought: ${snack.name}. Credits left: ${credits}`);

            return null;
        }

        console.log(`Not enough dineros`);
    };

    const handleSellSnack = (snack: Snack, index: number) => {
        setBasket(basket.filter((_s, i: number) => i !== index));
        setCredits(credits + snack.price);
    };

    const renderBasket = (
        <Card>
            <Card.Header>Basket {credits}</Card.Header>
            {basket.map((snack: Snack, index: number) => (
                <Button
                    key={`basket-snack-${index}-${snack.name}`}
                    onClick={() => handleSellSnack(snack, index)}
                >
                    {snack.name}
                </Button>
            ))}
        </Card>
    );

    const renderPossibleSnacks = (
        <Card>
            <Card.Header>Market</Card.Header>
            {availableSnacks.map((snack: Snack) => (
                <Button
                    key={`possible-buys-${snack.name}`}
                    onClick={() => handleBuySnack(snack)}
                >
                    {snack.name}
                </Button>
            ))}
        </Card>
    );

    const classname = `market${rotate?`-uneven`:``}`

    return (
        <Card className={classname}>
            <Card.Header>Market</Card.Header>
            <Card.Body className='content'>
                {renderBasket}
                {renderPossibleSnacks}
            </Card.Body>
        </Card>
    );
};
