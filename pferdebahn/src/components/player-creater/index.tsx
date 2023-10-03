import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react'
import { Dice, Player } from '..'

export interface PlayerCreatorProps {
    onCreatPlayer: (newPlayer: Player) => void}

export const PlayerCreator = (props: PlayerCreatorProps)  => {
    const {onCreatPlayer} = props;
     
    const [playerNameInput, setPlayerNameInput] = useState<string>("");
    const [playerDiceInput, setPlayerDiceInput] = useState<Dice | undefined>(Dice.SIX);
    const inputRef = useRef("inputref");

    const nameInput = (
      <>
      <Form.Label htmlFor="nameInput">User Name</Form.Label>
      <Form.Control
        type="text"
        value={playerNameInput}
        id={inputRef.current}
        onChange={(e) => setPlayerNameInput(e.target.value)}
        placeholder='Gehard der Schreckliche'
        aria-describedby="nameInputHelpBlock"
      />
      <Form.Text id="nameInputHelpBlock" muted>
        Enter your character name.
      </Form.Text>
    </>
    )

    /**
     * Can only get called if the inputs arent undefined.
     */
    const handleCreatePlayer = () => {
      onCreatPlayer({name: playerNameInput, dice:playerDiceInput!})      
      console.log(`Created a new Player: "${playerNameInput}" he chose the "${playerDiceInput}" Dice`);
      }

  return (
    <>
      {nameInput}
      <button onClick={handleCreatePlayer} disabled={playerDiceInput === undefined}>
      Add Player
      </button>
    </>
  )
}