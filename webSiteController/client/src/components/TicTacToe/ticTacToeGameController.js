import React, { useState } from "react";
import {Fragment} from "react";
import Board from "../TicTacToe/boardTicTacToe";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import "./Chat.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


import { Window, MessageList, MessageInput } from "stream-chat-react";
import Grid from "@mui/material/Grid";
function Game({ channel, setChannel, setGameSelected, player1, player2, clientID, setIsSelected}) {
    const [firstConnected, setFirstConnected] = useState(null);
    const [playersJoined, setPlayersJoined] = useState(
        channel.state.watcher_count === 2
    );
    const handleFirst = () => {
        setFirstConnected(player1);
    }
    const [result, setResult] = useState({ winner: "none", state: "none" });

    channel.on("user.watching.start", (event) => {
        setPlayersJoined(event.watcher_count === 2);
    });
    if (!playersJoined) {
        if (firstConnected === null){
            handleFirst(clientID);
        }
        return <Fragment>
            <Grid align="center" sx={{justifyContent: 'center', mt: 4, mb: 4, ml: 18}}>
            <Stack direction="row">
            <Typography variant='h4' textAlign='center'> Waiting for the other player to join...  </Typography>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
            </Stack>
            </Grid>
        </Fragment>
    }

    return (
        <div className="gameContainer">
            <Box sx={{height: "100vh", width: "90vh"}}>
            <Board result={result} setResult={setResult} player1={player1} player2={player2}
                   firstConnected={firstConnected} setGameSelected={setGameSelected}
                   setIsSelected={setIsSelected} setChannel={setChannel} isNotMegaTTT={true}/>
            </Box>

            {/*<Window>*/}
            {/*    <MessageList*/}
            {/*        disableDateSeparator*/}
            {/*        closeReactionSelectorOnClick*/}
            {/*        hideDeletedMessages*/}
            {/*        messageActions={["react"]}*/}
            {/*    />*/}
            {/*    <MessageInput noFiles />*/}
            {/*</Window>*/}


            {result.state === "won" && <div> {result.winner} Won The Game</div>}
            {result.state === "tie" && <div> Game Tied</div>}
        </div>
    );
}

export default Game;