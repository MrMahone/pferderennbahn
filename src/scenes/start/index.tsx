import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Container, Navbar } from 'react-bootstrap';

import { RootState, AppDispatch } from '../../main';
import { Player, Setup, Track , SceneController} from '../../components';
import { addPlayer, removePlayerByName } from '../../reducer/player';

import './start.css';

export const StartScene = () => {
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
            <Navbar className="navbar" bg="primary" data-bs-theme="light">
                <Navbar.Brand href="#home">Die Pferderennbahn</Navbar.Brand>
                <SceneController/>
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