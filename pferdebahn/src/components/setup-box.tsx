import { useState } from 'react';
import '../App.css';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

export enum Dice {
  "SIX" = 6,
  "TEN" = 10,
  "TWELVE" = 12,
  "TWENTY" = 20,
}

export type Player  = {
    name: string,
    dice: Dice
}

export interface SetupBoxProps {
    players: Player[];
    onAddPlayer: (newPlayer: Player) => void;
}

export const SetupBox=(props: SetupBoxProps) => {
    const {players, onAddPlayer} = props;
    const [playerNameInput, setPlayerNameInput] = useState<string>("Player");
    const [playerDiceInput, setPlayerDiceInput] = useState<Dice | undefined>(Dice.SIX);

    /**
     * Can only get called if the inputs arent undefined.
     */
    const handleCreatePlayer = ():Player => {
      console.log(`Created a new Player: "${playerNameInput}" he chose the "${playerDiceInput}" Dice`);
        return {name: playerNameInput, dice:playerDiceInput!};
    }

    /**
     * Some cards, each represents a player.
     */
    const playerCards = players.map((player) =>
    <div className='card'>
    <p>    {player.name}</p>
    <p>{player.dice}</p>
    </div>
    )

  return (
    <div>
    <h1>Players</h1>
    
    <button onClick={handleCreatePlayer} disabled={playerDiceInput === undefined}>
          Add Player
        </button>
      <div className="card">
      {playerCards}  
      </div>
    </div>
      
    
  )
  }
