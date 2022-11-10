import { Fragment, useReducer } from 'react';
import { Start } from "./Components/start.js"
import { Shop } from "./Components/shop.js"
import { Battle } from './Components/battle';
import { createInitialState, reducers } from './reducer';

export const App = () => {
const [state, dispatch] = useReducer(reducers, undefined, createInitialState)

if(state.mode === 'start'){
  return(
    <Fragment>
      <Start units={state.units} dispatch={dispatch}></Start>
    </Fragment>
    )
  }
if(state.mode === 'shop'){
  return(
    <Shop units={state.units} dispatch={dispatch}></Shop>
    )
  }
if(state.mode === 'battle'){
  return(
    <Battle></Battle>
    )
  }
}
