import { Fragment, useReducer } from 'react';
import { Start } from "./Components/start.js"
import { Shop } from "./Components/shop.js"
import { Battle } from './Components/battle/battle.js';
import { createInitialState, reducers } from './reducer';
import "./App.css"

export const App = () => {
const [state, dispatch] = useReducer(reducers, undefined, createInitialState)

if(state.mode === 'start'){
  return(
    <div className='white'>
      <div className='App'>
        <Start dispatch={dispatch}></Start>
      </div>
    </div>
    )
  }
if(state.mode === 'shop'){
  return(
    <div className='white'>
      <div className='App'>
        <Shop units={state.units} members={state.members} dispatch={dispatch}></Shop>
      </div>
    </div>
    )
  }
if(state.mode === 'battle'){
  return(
    <div className='white'>
      <div className='App'>
        <Battle state={state} dispatch={dispatch}></Battle>
      </div>
    </div>
    )
  }
}
