import { Card, Container } from 'react-bootstrap';
import { Market, MarketInterface, Track } from '../../components';
import { RootState } from '../../main';
import { useSelector } from 'react-redux';
import { Player } from '../../types';

import './market.css';

export const MarketScene = () => {
    const {players} = useSelector((state:RootState) => state.player);

    const evenPlayers: Player[] = [];
    const unevenPlayers: Player[] = [];

    players.forEach((player, index) => {
        if(index%2){
            evenPlayers.push(player)
        } else {
            unevenPlayers.push(player);
        }
    });

    const playerBox = (player: Player, uneven: boolean) => {
        return (<Market rotate={uneven}/>)
    }

    const upperSide = () => {
        return (<section className="player-area">{unevenPlayers.map((player) => playerBox(player,true))}</section>)
    }
    
    const lowerSide = () => {
        return (<section className="player-area">{evenPlayers.map((player) => playerBox(player,false))}</section>)
    }

    //TODO: dont know why spacing between doesn work here, maybe use a grid
    return (
        <>
            <section className='market-scene'>
                {upperSide()}
                <Card> Some cool info</Card>
                {lowerSide()}
            </section>   
        </>
    );
};
