import { Navbar } from 'react-bootstrap';
import { SceneController } from '..';

import './navbar.css';

export const NavigationBar = () => {
    return (
        <>
            <Navbar className="navbar" bg="primary" data-bs-theme="light">
                <Navbar.Brand href="#home">Das Schweinerennen</Navbar.Brand>
                <SceneController />
            </Navbar>
        </>
    );
};
