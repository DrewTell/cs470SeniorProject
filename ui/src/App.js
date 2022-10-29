import "./App.css";
import Gamecard from "./Components/Gamecard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Board from "./Games/pentago/src/Board"

function Menu(){
  return (
    <div className="App">
      <h1 className="title">Pick Your Game</h1>
      <Grid container spacing={3}>
        <Grid sx={{ ml: 8 }} item xs>
          <Gamecard />
        </Grid>
        <Grid item xs>
          <Gamecard/>
        </Grid>
        <Grid item xs>
          <Gamecard/>
        </Grid>
      </Grid>
      <Button sx={{ mt: 10 }} color="success" variant="contained">Login</Button>
    </div>
  );
}

function App() {
  return (
    //replace with <Board/> to render Pentago
    <Menu/>
  )
}

export default App;
