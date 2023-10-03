import { useState } from 'react'
import { Player, SetupBox } from './components'
import './App.css'

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  const handleAddPlayer = (newPlayer: Player) => {
    console.log(`The container received the ${newPlayer.name} player.`, newPlayer);
    setPlayers([...players, newPlayer]);
  }

  return (
    <>
      <SetupBox players={players} onAddPlayer={handleAddPlayer}/>
    </>
  )
}

export default App
