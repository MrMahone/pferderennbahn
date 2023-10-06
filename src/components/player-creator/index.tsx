import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { Player } from '..';
import { Dices } from '../../constants';
import { Button, Card, CardBody } from 'react-bootstrap';

import './player-creator.css';

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
        <section key="name-input">
            <Form.Control
                type="text"
                value={playerNameInput}
                onChange={(e) => setPlayerNameInput(e.target.value)}
                aria-describedby="nameInputHelpBlock"
            />
            <Form.Text id="nameInputHelpBlock" muted>
                Enter your character name and pick a dice.
            </Form.Text>
        </section>
    );

    const diceDropDown = (
        <Dropdown key="dice-drop-down" className="dice-drop-down">
            <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                disabled={playerNameInput === ''}
            >
                Pick Dice
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {Dices.map((dice) => (
                    <Dropdown.Item
                        key={`dice-drop-down-key-${dice}`}
                        onClick={() =>
                            handleCreatePlayer({ name: playerNameInput, dice })
                        }
                    >
                        {dice}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );

    return (
        <Card>
            <Card.Header>
                <h2>Add players</h2>
            </Card.Header>
            <CardBody>
                {nameInput}
                {diceDropDown}
            </CardBody>
            <Button variant="outline-primary" onClick={onHide}>
                Hide player creator
            </Button>
        </Card>
    );
};
