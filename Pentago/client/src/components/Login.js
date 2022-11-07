import React, {Fragment, useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {TextField} from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
function Login({ setIsAuth }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const cookies = new Cookies();
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username,
            password,
        }).then((res) => {
            const { firstName, lastName, username, token, userId } = res.data;
            cookies.set("token", token);
            cookies.set("userId", userId);
            cookies.set("username", username);
            cookies.set("firstName", firstName);
            cookies.set("lastName", lastName);
            console.log("in here", res.data);
            if (res.data['message'] !== 'User not found'){
                setIsAuth(true);
            }

        });
    };
    return (
        <Fragment>
            <Stack direction="column" divider={<Divider orientation="vertical" flexItem />} sx = {{ alignItems: 'center', justifyContent: 'center' }}>

                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Login
                </Typography>

            <TextField
                variant="outlined"
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <TextField
                placeholder="Password"
                type="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <Button color={'primary'} onClick={login}> Submit</Button>
            </Stack>
        </Fragment>
    );
}

export default Login;