import { useMemo, useState } from 'react';
import { Player, Snack } from '../../types';
import { Button, Card } from 'react-bootstrap';
import { PossibleBuys } from '../../utils';

import './market.css';
import { Snacks } from '../../constants';
import { useDispatch } from 'react-redux';
import { buyItem, sellItem } from '../../reducer/player';

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
    player: Player,
    rotate: boolean,
}

export const Market = (props:MarketInterface) => {
    const {rotate, player} = props;
    const dispatch = useDispatch();

    // map that stuff const [basket, setBasket] = useState<(itemStack[])[]>(iventory => itemstack[]);
    const availableSnacks = useMemo<Snack[]>(
        () => PossibleBuys(player.credits),
        [player.credits]
    );

    const handleBuySnack = (snack: Snack) => {
        dispatch(buyItem({snack:snack, player}))
        console.log(`Player: ${player.name} bought: ${snack.name}. Credits left: ${player.credits}`);
    };

    const handleSellSnack = (snack: Snack) => {
        dispatch(sellItem({snack, player}))
        console.log(`Player: ${player.name} sold: ${snack.name}. Credits left: ${player.credits}`);
    };

    const renderBasket = (
        <Card>
            <Card.Header>Basket {player.credits}</Card.Header>
            {player.inventory.map((snack:Snack) => (
                <Button
                    key={`basket-snack-${snack.name}s`}
                    onClick={() => handleSellSnack(snack)} // Dispatch
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
