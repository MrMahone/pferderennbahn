import { useState } from 'react';
import { Player, Setup, Track } from './components';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [players, setPlayers] = useState<Player[]>([]);

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
            <Container>
                <Row>
                    <Col sm={4}>
                        <Setup
                            players={players}
                            onAddPlayer={handleAddPlayer}
                            onRemovePlayer={handleRemovePlayer}
                        />
                    </Col>
                    <Col sm={8}>
                        <Track players={players}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
