import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { Player } from "..";
import { Dices } from "../../constants";

export interface PlayerCreatorProps {
  onCreatPlayer: (newPlayer: Player) => void;
}

export const PlayerCreator = (props: PlayerCreatorProps) => {
  const { onCreatPlayer } = props;

  const [playerNameInput, setPlayerNameInput] = useState<string>("");

  const nameInput = (
    <>
      <Form.Label htmlFor="nameInput">User Name</Form.Label>
      <Form.Control
        type="text"
        value={playerNameInput}
        onChange={(e) => setPlayerNameInput(e.target.value)}
        placeholder="Gehard der Schreckliche"
        aria-describedby="nameInputHelpBlock"
      />
      <Form.Text id="nameInputHelpBlock" muted>
        Enter your character name.
      </Form.Text>
    </>
  );

  const diceDropDown = (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Choose Dice
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Dices.map((dice) => (
          <Dropdown.Item
            onClick={() => onCreatPlayer({ name: playerNameInput, dice })}
          >
            {dice}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <>
      {nameInput}
      {diceDropDown}
    </>
  );
};
