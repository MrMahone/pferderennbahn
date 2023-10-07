import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './reducer/player';

export default configureStore({
  reducer: {
    playerReducer
  },
})