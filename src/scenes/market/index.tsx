import { Card, Container } from 'react-bootstrap';
import { Market, Track } from '../../components';
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

    const playerBox = (player: Player) => {
        return (<Market/>)
    }

    const upperSide = () => {
        return (<section className="player-area">{unevenPlayers.map((player) => playerBox(player))}</section>)
    }
    
    const lowerSide = () => {
        return (<section className="player-area">{evenPlayers.map((player) => playerBox(player))}</section>)
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
