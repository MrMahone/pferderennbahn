import { Card } from 'react-bootstrap';
import { Market} from '../../components';
import { RootState } from '../../main';
import { useSelector } from 'react-redux';
import { Player } from '../../types';

import './market.css';

export const MarketScene = () => {
    const {players} = useSelector((state:RootState) => state.player);

    const unevenPlayers:Player[] = players.map((player) => !!(player.index%2) ? player : undefined).filter((item): item is Player => !!item);
    
    const evenPlayers: Player[] = players.map((player) => !(player.index%2) ? player : undefined).filter((item): item is Player => !!item);


    const upperSide = () => {
        return (<section className="player-area">{unevenPlayers.map((player:Player) => <Market player={player} rotate={!(player.index%2)} />)}</section>)
    }
    
    const lowerSide = () => {
        return (<section className="player-area">{evenPlayers.map((player) => <Market player={player} rotate={!!(player.index%2)}/>)}</section>)
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
