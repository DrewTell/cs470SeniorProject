import React, { useState } from "react";
import { useChatContext, Channel } from "stream-chat-react";
import CustomInput from "./CustomInput";

import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";


function PlaceHolderGame() {
    const [rivalUsername, setRivalUsername] = useState("");
    const { client } = useChatContext();
    const [channel, setChannel] = useState(null);
    const createChannel = async () => {
        const response = await client.queryUsers({ name: { $eq: rivalUsername } });

        if (response.users.length === 0) {
            alert("User not found");
            return;
        }

        const newChannel = await client.channel("messaging", {
            members: [client.userID, response.users[0].id],
        });

        await newChannel.watch();
        setChannel(newChannel);
    };
    return (
        <>
            {channel ? (
                <Channel channel={channel} Input={CustomInput}>
                    <div> Work in Progress </div>
                </Channel>
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
                        onChange={(event) => {
                            setRivalUsername(event.target.value);
                        }}
                    />
                    <button onClick={createChannel}> Join/Start Game</button>
                </div>
            )}
        </>
    );
}

export default PlaceHolderGame;