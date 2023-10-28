import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container, Navbar } from 'react-bootstrap';

import { RootState, AppDispatch } from './main';
import { Player, Setup, Track } from './components';
import { addPlayer, removePlayerByName } from './reducer/player';

import './App.css';

function App() {
    const {players} = useSelector((state: RootState) => state.player)
    const dispatch:AppDispatch = useDispatch();

    const handleAddPlayer = (newPlayer: Player) => {
        dispatch(addPlayer(newPlayer));
    };

    const handleRemovePlayer = (playerToRemove: Player) => {
        dispatch(removePlayerByName(playerToRemove.name));
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
                        <Track players={players} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
