import { PlayerCreator } from "../player-creator";
import { Button } from "react-bootstrap";
import { DiceValue } from "../../enums";

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
        <div className="card" key={`player-card-${player.name}`}>
            <p key={`player-card-name${player.name}`}>{player.name}</p>
            <p key={`player-card-dice${player.name}`}>{player.dice}</p>
            <Button onClick={() => onRemovePlayer(player)}>X</Button>
        </div>
    ));

    return (
        <div>
            <PlayerCreator onCreatPlayer={onAddPlayer}></PlayerCreator>
            <div className="card">{playerCards}</div>
        </div>
    );
};
