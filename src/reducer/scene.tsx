import { createSlice } from '@reduxjs/toolkit';
import { Scenes } from '../constants';

interface SceneSlice {
    currentScene: number;
}

const initState: SceneSlice = {
    currentScene: 0
};

export const sceneSlice = createSlice({
    name: 'player',
    initialState: initState,
    reducers: {
        nextScence: (state) => {
            state.currentScene += 1;
        },
        previousScence: (state) => {
            if (state.currentScene > 0) {
                state.currentScene -= 1;
            }
        },
        setSceneByName: (state, action) => {
            const sceneIndex = Scenes.findIndex(action.payload);
            state.currentScene = sceneIndex;
        }
    }
});

// Action creators are generated for each case reducer function
export const { nextScence, previousScence } = sceneSlice.actions;

export default sceneSlice.reducer;
