import { createSlice } from '@reduxjs/toolkit';
import { Player } from '../types';

interface PlayerSlice {
    players: Player[];
}

const initState: PlayerSlice = {
    players: []
};

export const playerSlice = createSlice({
    name: 'player',
    initialState: initState,
    reducers: {
        addPlayer: (state, action) => {
            state.players.push(action.payload);
        },
        removePlayerByName: (state, action) => {
            state.players = state.players.filter(
                (player) => player.name !== action.payload
            );
        },
        buyItem: (state, action) => {
            const playerThatBuys = action.payload.player.index;

            state.players[playerThatBuys].inventory = [...state.players[playerThatBuys].inventory, action.payload.snack];
            state.players[playerThatBuys].credits = state.players[playerThatBuys].credits - action.payload.snack.price;
        },
        sellItem: (state, action) => {
            const playerThatSells = action.payload.player.index;
            console.log("trying to sell:", action.payload.snack.name)
            console.log(state.players[playerThatSells].inventory.forEach);
            //const indexToRemove = state.players[playerThatSells].inventory.findIndex();

            //state.players[playerThatSells].inventory.splice(indexToRemove,1);
        }
    }
});

// Action creators are generated for each case reducer function
export const { addPlayer, removePlayerByName, buyItem, sellItem} = playerSlice.actions;

export default playerSlice.reducer;
