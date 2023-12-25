import { createSlice } from '@reduxjs/toolkit';
import { Player, Snack } from '../types';

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

            state.players[playerThatBuys].basket = [...state.players[playerThatBuys].inventory, action.playload.snack] = state.players.filter(
                (player) => player.name !== action.payload
            );
        }
    }
});

// Action creators are generated for each case reducer function
export const { addPlayer, removePlayerByName } = playerSlice.actions;

export default playerSlice.reducer;
