import { Navbar } from 'react-bootstrap';

import { SceneController} from '../../components';


export const GameScene = () => {

    return (
        <>
            <Navbar className="navbar" bg="primary" data-bs-theme="light">
                <Navbar.Brand href="#home">Die Pferderennbahn</Navbar.Brand>
                <SceneController/>
            </Navbar>
        </>
    );
}