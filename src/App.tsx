import { useState } from 'react';
import { Row, Col, Container, Navbar } from 'react-bootstrap';

import { Player, Setup, Track, Market } from './components';

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
                <Navbar.Brand href="#home">Das Schweinerennen</Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <Col className="setup-row" sm={4}>
                        <Setup
                            players={players}
                            onAddPlayer={handleAddPlayer}
                            onRemovePlayer={handleRemovePlayer}
                        />
                    </Col>
                    <Col sm={8}>
                        <Market />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
