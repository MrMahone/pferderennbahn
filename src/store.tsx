import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './reducer/player';
import sceneReducer from './reducer/scene';

export default configureStore({
    reducer: {
        player: playerReducer,
        scene: sceneReducer
    }
});
