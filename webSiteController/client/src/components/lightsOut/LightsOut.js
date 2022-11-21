import React, {Fragment, useReducer, useEffect, useState} from 'react';
import { click_on_cell_action, reset_action, board_reshape } from './actions';
import { reducers, createInitialState } from './reducers';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import Stack from '@mui/material/Stack'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline, Divider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


let config = {
    num_rows: 6,
    num_columns: 6,
    h_gap:4,
    cell_width: 50,
    cell_height: 50
}


function Cell(props) {
    const { dispatch, cell, colIdx, rowIdx} = props;

    return (
        <Box sx={{
            width: config.cell_width,
            height: config.cell_height,
            backgroundColor: cell['color'],
            border: 1,
            borderColor: 'black',
            borderRadius: '2',
            boxShadow: "1px 1px 4px gray"
        }}
             onClick={() => dispatch(click_on_cell_action(colIdx, rowIdx, cell['color']))}
        />
    );
}

function Row(props) {
    const {cell, dispatch } = props;
    // console.log("In row: ", props);
    return (
        <Grid container
              conlumns={props.row.length}
              sx={{
                  display: 'flex',
                  direction: 'flex-row',
                  alignContent: 'space-between',
                  justifyContent: 'space-between'
              }}

        >
            {
                props.row.map((cell, idx) =>
                    <Grid item
                          key={idx}
                    >
                        <Cell key={idx}
                              cell={cell}
                              colIdx={idx}
                              rowIdx={props.rowIdx}
                              dispatch={dispatch}
                        />
                    </Grid>)
            }
        </Grid>
    )
}

function TopMessage(props) {

    const {haveAWinner, winnerColor, resetClick} = props;
    
    const Title = () =>  "Lights Out";
    const firstMessage = () => haveAWinner ? `You Won. Game Over` : ``;
    return (
        <Stack width='100%'>
            <Typography variant='h4' textAlign='center' sx={{boxShadow: "1px 1px 5px gray", textShadow: "    0 0 7px #fff,\n" +
                    "    0 0 10px #fff,\n" +
                    "    0 0 21px #fff,\n" +
                    "    0 0 42px #0fa,\n" +
                    "    0 0 82px #0fa,\n" +
                    "    0 0 92px #0fa,\n" +
                    "    0 0 102px #0fa,\n" +
                    "    0 0 151px #0fa;"}}>
                {
                    Title()

                }
            </Typography>
            <Typography variant='h6' textAlign='center'>
                {
                    firstMessage()

                }
            </Typography>


            <Button width='100%'
                    sx={{textShadow: "2px 2px 10px green"
                    }}
                    onClick={() => {
                        props.dispatch(reset_action())
                        props.resetClick()
                    }
            }>Reset?
            </Button>
        </Stack>
    )
}

function ChangeBoardState(props) {

    return (
        <Fragment>
            <Button onClick={() => {props.dispatch(board_reshape(5, 5))
                                    props.resetClick()}}>
                5x5
            </Button>
            <Button onClick={() => {props.dispatch(board_reshape(6, 6))
                                    props.resetClick()}}>
                6x6
            </Button>
            <Button onClick={() => {props.dispatch(board_reshape(10, 10))
                                    props.resetClick()}}>
                10x10
            </Button>
        </Fragment>

    )
}


export default function LightsOut(props) {

    const [state, dispatch] = useReducer(reducers, undefined, createInitialState);
    const {clickCount, boardTime, boardActive, haveAWinner, board, boardAttributes} = state;

    const calcWidth = () => boardAttributes[1] * config.cell_width +
        (boardAttributes[1] - 1) * config.h_gap

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(true);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);


    useEffect( () => {
        if (haveAWinner){
            toggle();
        }
    }, [haveAWinner]);


    // useEffect( () => {
    //     config['num_rows'] = state.boardAttributes[0];
    //     config['num_columns'] = state.boardAttributes[1];
    // }, [state.boardAttributes]);



    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
        <Fragment>

            <Grid container margin='auto'
                  columns={1}
                  sx={{
                      width: calcWidth(),
                      display: 'flex',
                      direction: 'flex-column',
                      justifyContent: 'center',
                      mt: 10
                  }}
            >
                <Grid item sx={{mb: 3}}>
                    <TopMessage
                                haveAWinner={haveAWinner}
                                dispatch={dispatch}
                                resetClick = {reset}
                    />
                </Grid>
                {
                    board.map((row, rowIdx) => (
                        <Grid item
                              key={rowIdx}
                              width='100%'
                              sx={{mb: 1}}
                              xs={1}
                        >
                            <Row key={rowIdx}
                                 row={row}
                                 rowIdx={rowIdx}
                                 dispatch={dispatch}
                            />
                        </Grid>))
                }
            </Grid>
        <Grid                   sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 3
        }}>
            <Grid>  Click Count: {state.clickCount} </Grid>
            <Grid sx = {{ml : 1}}>  Time passed: {Math.floor(seconds / 60)} minute {seconds % 60} seconds</Grid>
        </Grid>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 1}} >
                <ChangeBoardState
                    dispatch={dispatch}
                    resetClick = {reset}
                />
            </Grid>
            <Grid sx={{
                display: 'flex',
                justifyContent: 'center',
                }}>
                <Button  onClick={() => {props.setGameSelected(false);
                                        props.setIsSelected(null)}}>
                    Leave Game
                </Button>
            </Grid>
        </Fragment>
    </ThemeProvider>
    );
}

