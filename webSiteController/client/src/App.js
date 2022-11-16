import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ToggleButtonNotEmpty from "./components/userSignInToggle";
import Button from '@mui/material/Button';
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { useState } from "react";
import JoinPentago from "./components/pentago/JoinPentago";
import PlaceHolderGame from "./components/PlaceHolder";
import React, {Fragment} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline, Divider} from "@mui/material";
import ResponsiveAppBar from "./components/AppBar";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function App() {
  const api_key = "ujt9j62cn6xx";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };

  if (token) {
    client
        .connectUser(
            {
              id: cookies.get("userId"),
              name: cookies.get("username"),
              firstName: cookies.get("firstName"),
              lastName: cookies.get("lastName"),
              hashedPassword: cookies.get("hashedPassword"),
            },
            token
        )
        .then((user) => {
          setIsAuth(true);
        });
  }
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
      <Fragment>

          <ResponsiveAppBar/>
        {isAuth ? (
            <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} sx = {{xs: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box  sx={{  width: '50%' }}>
                <Chat client={client}>
                <JoinPentago />



            </Chat>
            </Box>
                <Box sx = {{width: '50%'}}>
                    <PlaceHolderGame/>
                </Box>
                </Stack>
        ) : (

                <Box component="span" sx={{ display: 'block', p: 35, border: '1'}}>
                <ToggleButtonNotEmpty setIsAuth={setIsAuth} />
                </Box>

        )
        }
          <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              style={{ minHeight: '100vh' }}
          >

              <Grid item xs={3}>
                  <Button onClick={logOut} sx={{xs: 'flex', alignItems: 'center', justifyContent: 'center' }}> Log Out</Button>
              </Grid>
          </Grid>
      </Fragment>
      </ThemeProvider>
  );
}

export default App;