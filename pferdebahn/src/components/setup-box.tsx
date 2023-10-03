import { useState } from 'react';
import { PlayerCreator } from './player-creater';
import '../App.css';

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
      <PlayerCreator onCreatPlayer={onAddPlayer}></PlayerCreator>
      <div className="card">
      {playerCards}  
      </div>
    </div>
      
    
  )
  }
