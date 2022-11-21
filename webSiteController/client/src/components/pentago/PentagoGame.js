import React, { useState } from "react";
import {Fragment} from "react";
import Board from "./PentagoBoard";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import "./Chat.css";


import { Window, MessageList, MessageInput } from "stream-chat-react";
function Game({ channel, setChannel, setGameSelected }) {
    const [playersJoined, setPlayersJoined] = useState(
        channel.state.watcher_count === 2
    );
    const [result, setResult] = useState({ winner: "none", state: "none" });

    channel.on("user.watching.start", (event) => {
        setPlayersJoined(event.watcher_count === 2);
    });
    if (!playersJoined) {
        return <div> Waiting for other player to join...</div>;
    }

    return (
        <div className="gameContainer">
            <Board result={result} setResult={setResult} />

            <Window>
                <MessageList
                    disableDateSeparator
                    closeReactionSelectorOnClick
                    hideDeletedMessages
                    messageActions={["react"]}
                />
                <MessageInput noFiles />
            </Window>

            <Button
                onClick={async () => {
                    await channel.stopWatching();
                    setChannel(null);
                    setGameSelected(false);
                }}
            >
                {" "}
                Leave Game
            </Button>

            {result.state === "won" && <div> {result.winner} Won The Game</div>}
            {result.state === "tie" && <div> Game Tied</div>}
        </div>
    );
}

export default Game;