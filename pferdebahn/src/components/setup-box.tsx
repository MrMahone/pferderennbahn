import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export type Player  = {
    name: string,
    dice: 6 | 10 | 12 | 20
}

export interface SetupBoxProps {
    players: Player[];
}

export const SetupBox(props: SetupBoxProps) {
    const {players} = props;
  

  return (
    <div>
    <h1>Players</h1>
      <div className="card">
        <button onClick={() => console.log("lel")}>
          lel
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
      
    
  )
  }
