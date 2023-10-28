import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../reducer/player';
import { AppDispatch, RootState } from '../../main';

import styles from './Counter.module.css'

export const Counter = () => {
  const {value} = useSelector((state: RootState) => state.player)
  const dispatch:AppDispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}