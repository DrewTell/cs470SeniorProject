import React, { useState } from "react";
import LightsOut from "./LightsOut";
import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";


function LightsOutGame() {

    const [startGame, setStartGame] = useState(null);
    const handleClick = event => {
        setStartGame(true);
    };
    return (
        <>
            {startGame ? (
                <LightsOut/>
            ) : (
                <div className="joinGame">
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,

                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Placeholder (? Players):
                    </Typography>

                    <Typography
                        paragraph={true}
                        variant="body2"

                        component="a"
                        gutterBottom
                        display="block"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,

                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Placeholder is an abstract strategy game for ? players with a game board revolving around ?.
                        This game reimplements the well known ? with a whole new spin: After ?, the player has to make a move, thus
                        changing the game state.
                    </Typography>
                    <TextField
                        placeholder="Username of placeholder rival..."
                    />
                    <button onClick={handleClick}> Join/Start Game</button>
                </div>
            )}
        </>
    );
}

export default LightsOutGame;