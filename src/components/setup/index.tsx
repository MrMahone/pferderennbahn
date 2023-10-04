import { PlayerCreator } from "../player-creator";
import { XLg } from 'react-bootstrap-icons';
import { DiceValue } from "../../enums";
import './setup.css';

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

    /**
     * Some cards, each represents a player.
     */
    const playerCards = players.map((player) => (
        <div className="player-card" key={`player-card-${player.name}`}>
            <div className="player-data">
                <p key={`player-card-name${player.name}`} className="player-name-text">{player.name}</p>
                <p key={`player-card-dice${player.name}`}>Dice: {player.dice}</p>
            </div>
            <figure className="remove-player-button" onClick={() => onRemovePlayer(player)}><XLg width={24} height={24}/></figure>
        </div>
    ));

    return (
        <div>
            <PlayerCreator onCreatPlayer={onAddPlayer}></PlayerCreator>
            <div className="card">{playerCards}</div>
        </div>
    );
};
