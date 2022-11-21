import React, { useState } from "react";
import LightsOut from "./LightsOut";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


function LightsOutGame(props) {
    const handleClick = event => {
            props.setGameSelected();
            props.setIsSelected(event);
    };
    return (
        <>
            {(props.isSelected === 'lightsOut') ? (
                <LightsOut setGameSelected={props.setGameSelected}
                           setIsSelected={props.setIsSelected}/>
            ) : props.gameSelected === false ? (
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
                        Lights Out (1 Player):
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
                        The game consists of a grid of lights. When the game starts,
                        a random number or a stored pattern of these lights is switched on.
                        Pressing any of the lights will toggle it and the adjacent lights.
                        The goal of the puzzle is to switch all the lights off, preferably
                        in as few button presses as possible.
                    </Typography>

                    <Button onClick={() => handleClick('lightsOut')}> Start Game</Button>
                </div>
            )
            : null
            }
        </>
    );
}

export default LightsOutGame;