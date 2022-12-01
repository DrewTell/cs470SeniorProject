import { Fragment, useReducer } from 'react';
import { Start } from "./Components/start.js"
import { Shop } from "./Components/shop.js"
import { Battle } from './Components/battle/battle.js';
import { createInitialState, reducers } from './reducer';
import "./App.css"
import { Stack } from '@mui/material';

export const App = () => {
const [state, dispatch] = useReducer(reducers, undefined, createInitialState)

if(state.mode === 'start'){
  return(
      <Stack className='App'>
        <Start dispatch={dispatch}></Start>
      </Stack>
    )
  }
if(state.mode === 'shop'){
  return(
      <Stack className='App'>
        <Shop units={state.units} members={state.members} stage={state.stage} gold={state.gold} dispatch={dispatch}></Shop>
      </Stack>
    )
  }
if(state.mode === 'battle'){
  return(
      <Stack className='App'>
        <Battle state={state} dispatch={dispatch}></Battle>
      </Stack>
    )
  }
}
