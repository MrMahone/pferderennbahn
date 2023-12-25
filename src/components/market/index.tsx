import { useMemo, useState } from 'react';
import { Player, Snack } from '../../types';
import { Button, Card } from 'react-bootstrap';
import { PossibleBuys } from '../../utils';

import './market.css';
import { Snacks } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../main';

const CREDITSAMOUNT = 60;

type ItemStack = {
    item: Snack;
    amount: number;
};

const bagOfBlubeerrys:ItemStack = {
    item: Snacks[3],
    amount: 3
}

console.log(bagOfBlubeerrys);

export interface MarketInterface {
    rotate: boolean,
    player: Player,
}

export const Market = (props:MarketInterface) => {
    const {rotate, player} = props;
    const dispatch = useDispatch();

    // map that stuff const [basket, setBasket] = useState<(itemStack[])[]>(iventory => itemstack[]);
    const availableSnacks = useMemo<Snack[]>(
        () => PossibleBuys(player.credits),
        [player.credits]
    );

    const basket = 

    const handleBuySnack = (snack: Snack) => {
        if (credits > 0) {
            dispatch(buyItem(player, snack))
            setBasket([...basket, snack]);
            setCredits(credits - snack.price);
            console.log(`Bought: ${snack.name}. Credits left: ${credits}`);

            return null;
        }

        console.log(`Not enough dineros`);
    };

    const handleSellSnack = (snack: Snack, index: number) => {
        // Dispatch
        setBasket(basket.filter((_s, i: number) => i !== index));
        setCredits(credits + snack.price);
    };

    const renderBasket = (
        <Card>
            <Card.Header>Basket {player.credits}</Card.Header>
            {player.inventory.map((itemStack:ItemStack) => (
                <Button
                    key={`basket-snack-${itemStack.item.name}s`}
                    onClick={() => handleSellSnack(snack, index)} // Dispatch
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
