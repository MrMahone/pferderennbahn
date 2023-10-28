import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { XLg, PersonAdd } from 'react-bootstrap-icons';

import { PlayerCreator } from '../player-creator';

import './setup.css';

export type Player = {
    name: string;
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
