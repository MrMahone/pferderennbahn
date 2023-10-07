import { useState } from 'react';
import { PlayerCreator } from '../player-creator';
import { XLg, PersonAdd } from 'react-bootstrap-icons';
import { DiceValue } from '../../enums';
import './setup.css';
import { Button } from 'react-bootstrap';

export type Player = {
    name: string;
    dice: DiceValue;
};

export interface SetupBoxProps {
    players: Player[];
    onAddPlayer: (newPlayer: Player) => void;
    onRemovePlayer: (playerToRemove: Player) => void;
}

export const Setup = (props: SetupBoxProps) => {
    const { players, onAddPlayer, onRemovePlayer } = props;
    //Todo: Move into App
    const [hideCreator, setHideCreator] = useState(false);
    

    /**
     * Some cards, each represents a player.
     */
    const playerCards = players.map((player) => (
        <div className="player-card" key={`player-card-${player.name}`}>
            <div className="player-data">
                <p
                    key={`player-card-name${player.name}`}
                    className="player-name-text"
                >
                    {player.name}
                </p>
                <p key={`player-card-dice${player.name}`}>
                    Dice: {player.dice}
                </p>
            </div>
            <figure
                className="remove-player-button"
                onClick={() => onRemovePlayer(player)}
            >
                <XLg width={24} height={24} />
            </figure>
        </div>
    ));

    //Todo: move to track
    const showCreator = (
        <Button variant="outline-primary" onClick={() => setHideCreator(false)}>
            Add more Players{' '}
            <PersonAdd width={24} height={24} className="person-add-icon" />
        </Button>
    );

    return (
        <div className="card">
            {hideCreator ? (
                showCreator
            ) : (
                <PlayerCreator
                    onCreatPlayer={onAddPlayer}
                    onHide={() => setHideCreator(true)}
                ></PlayerCreator>
            )}
            {playerCards}
        </div>
    );
};
