import {useEffect, useReducer, useState} from 'react';
import { Plan } from "./plan.js"
import { createInitialState, reducers } from './reducer';
import "./Battleship.css"
import { Stack } from '@mui/material';
import {useChannelStateContext, useChatContext} from "stream-chat-react";

export const App = (props) => {
    const {player1, player2, firstConnected, setChannel} = props;

    const cookieIDName = document.cookie
        .split('; ')
        .find((row) => row.startsWith('username='))
        ?.split('=')[1];
    const [player, setPlayer] = useState(null);
    const [player1Name, setPlayer1Name] = useState(null);
    const [player2Name, setPlayer2Name] = useState(null);
    const { channel } = useChannelStateContext();
    const { client } = useChatContext();


    //SetPlayer is the clients player
    //Player1 will be the host of the game
    //Player2 is the one who joined on it
    useEffect(() => {

        if (firstConnected === null){
            setPlayer('player2');
            setPlayer1Name(player2);
            setPlayer2Name(player1);

        }
        else if (cookieIDName === firstConnected){
            setPlayer('player1');
            setPlayer1Name(player1);
            setPlayer2Name(player2);

        }
    }, [])

    //Lets you know who is playing
    console.log("You are player: ", player);
    console.log("Player 1:", player1Name, " this is player 2: ", player2Name);



    const [state, dispatch] = useReducer(reducers, undefined, createInitialState)

    if(state.mode === 'plan'){
        return(
            <Stack style={{cursor: `url(Ship${state.shipsSet+1}.png), auto`}}className='App'>
              <Plan state={state} dispatch={dispatch}></Plan>
            </Stack>
          )
      }

    /*if(state.mode === 'battle'){
      return(
          <Stack className='App'>
            <Battle dispatch={dispatch}></Battle>
          </Stack>
        )
      }*/
    /*if(state.mode === 'victory'){
      return(
          <Stack className='App'>
            <Victory dispatch={dispatch}></Victory>
          </Stack>
        )
      }*/
    }
