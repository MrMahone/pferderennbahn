import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer/player';

export default configureStore({
  reducer: {
    player: counterReducer
  },
})