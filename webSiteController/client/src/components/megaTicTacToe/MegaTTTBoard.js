import React, {Fragment, useReducer, useState, useEffect} from 'react';
import { useChannelStateContext, useChatContext } from "stream-chat-react";

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import Stack from '@mui/material/Stack'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createMuiTheme} from "@mui/material";

import {CssBaseline} from "@mui/material";
import {green} from "@mui/material/colors";
import Board from "../TicTacToe/boardTicTacToe";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Train One',
            'cursive',
        ].join(','),
    },});


export default function MTTBoard(props) {
    const {player1, player2, firstConnected, clientID, setGameSelected, setIsSelected, setChannel} = props;
    const [result, setResult] = useState(null);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Fragment>
                <Stack direction={"column"} sx = {{mt: 12}}>


                    <Stack direction={"row"}>
                        <Grid columns={3} sx={{border: '2px solid'}}>
                            <Board idkey={1} result={result} setResult={setResult} player1={player1} player2={player2}
                               firstConnected={firstConnected} setGameSelected={setGameSelected}
                               setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                        </Grid>
                        <Grid sx={{border: '2px solid'}}>
                            <Board idkey={2} result={result} setResult={setResult} player1={player1} player2={player2}
                                   firstConnected={firstConnected} setGameSelected={setGameSelected}
                                   setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                        </Grid>
                        <Grid sx={{border: '2px solid'}}>
                            <Board idkey={3} result={result} setResult={setResult} player1={player1} player2={player2}
                                   firstConnected={firstConnected} setGameSelected={setGameSelected}
                                   setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                        </Grid>

                    </Stack>




                        <Stack direction={"row"}>
                            <Grid sx={{border: '2px solid'}}>
                                <Board idkey={4} result={result} setResult={setResult} player1={player1} player2={player2}
                                       firstConnected={firstConnected} setGameSelected={setGameSelected}
                                       setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                            </Grid>
                            <Grid sx={{border: '2px solid'}}>
                                <Board idkey={5} result={result} setResult={setResult} player1={player1} player2={player2}
                                       firstConnected={firstConnected} setGameSelected={setGameSelected}
                                       setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                            </Grid>
                            <Grid sx={{border: '2px solid'}}>
                                <Board idkey={6} result={result} setResult={setResult} player1={player1} player2={player2}
                                       firstConnected={firstConnected} setGameSelected={setGameSelected}
                                       setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                            </Grid>
                            <Stack/>




                        </Stack>


                    <Stack direction={"row"}>
                        <Grid sx={{border: '2px solid'}}>
                            <Board idkey={7} result={result} setResult={setResult} player1={player1} player2={player2}
                                   firstConnected={firstConnected} setGameSelected={setGameSelected}
                                   setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                        </Grid>
                        <Grid sx={{border: '2px solid'}}>
                            <Board idkey={8} result={result} setResult={setResult} player1={player1} player2={player2}
                                   firstConnected={firstConnected} setGameSelected={setGameSelected}
                                   setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                        </Grid>
                        <Grid sx={{border: '2px solid'}}>
                            <Board idkey={9} result={result} setResult={setResult} player1={player1} player2={player2}
                                   firstConnected={firstConnected} setGameSelected={setGameSelected}
                                   setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={false}/>
                        </Grid>

                    </Stack>


            </Stack>


            </Fragment>
        </ThemeProvider>
    );
}
