import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Player } from '../../types';
import { Button, Card, CardBody } from 'react-bootstrap';

import './player-creator.css';
import { PlusCircle } from 'react-bootstrap-icons';

export interface PlayerCreatorProps {
    onCreatPlayer: (newPlayer: Player) => void;
    onHide: () => void;
}

export const PlayerCreator = (props: PlayerCreatorProps) => {
    const { onCreatPlayer, onHide } = props;

    const [playerNameInput, setPlayerNameInput] = useState<string>('');

    /**
     * Handler function to create a new player and reset the name input field.
     * @param newPlayer
     */
    const handleCreatePlayer = (newPlayer: Player) => {
        onCreatPlayer(newPlayer);
        setPlayerNameInput('');
    };

    const nameInput = (
        <>
            <section className="name-input">
                <Form.Control
                    type="text"
                    value={playerNameInput}
                    onChange={(e) => setPlayerNameInput(e.target.value)}
                    aria-describedby="nameInputHelpBlock"
                />
                <Button
                    className="add-player-button"
                    variant="outline-primary"
                    onClick={() =>
                        handleCreatePlayer({ name: playerNameInput })
                    }
                    disabled={playerNameInput === ''}
                >
                    <PlusCircle />
                </Button>
            </section>
            <section>
                <Form.Text id="nameInputHelpBlock" muted>
                    Enter your character name.
                </Form.Text>
            </section>
        </>
    );

    
    return (
        <Card>
            <Card.Header>
                <h2>Add players</h2>
            </Card.Header>
            <CardBody>{nameInput}</CardBody>
            <Button variant="outline-primary" onClick={onHide}>
                Hide player creator
            </Button>
        </Card>
    );
};