import { useState } from 'react';
import { Player, Setup } from './components';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [players, setPlayers] = useState<Player[]>([]);

<<<<<<< HEAD
    const handleAddPlayer = (newPlayer: Player) => {
        setPlayers([...players, newPlayer]);
    };

    const handleRemovePlayer = (playerToRemove: Player) => {
        setPlayers([
            ...players.filter((player) => player.name !== playerToRemove.name)
        ]);
    };

    return (
        <>
            <Navbar bg="primary" data-bs-theme="light">
                <Navbar.Brand href="#home">Die Pferderennbahn</Navbar.Brand>
            </Navbar>
            <Setup
                players={players}
                onAddPlayer={handleAddPlayer}
                onRemovePlayer={handleRemovePlayer}
            />
        </>
    );
=======
  const handleAddPlayer = (newPlayer: Player) => {
    setPlayers([...players, newPlayer]);
  };

  const handleRemovePlayer = (playerToRemove: Player) => {
    setPlayers([
      ...players.filter((player) => player.name !== playerToRemove.name),
    ]);
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="light">
        <Navbar.Brand href="#home">Die Pferderennbahn</Navbar.Brand>
      </Navbar>
      <Setup
        players={players}
        onAddPlayer={handleAddPlayer}
        onRemovePlayer={handleRemovePlayer}
      />
    </>
  );
>>>>>>> 7fe9b8549226fd1d442ef1c26a93956e5d0cc08a
}

export default App;
