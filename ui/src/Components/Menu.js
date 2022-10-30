import Gamecard from "./Gamecard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Menu(props) {
    return (
      <div className="Menu">
        <h1 className="title">Game Menu</h1>
        <Grid container spacing={3}>
          <Grid sx={{ ml: 8 }} item xs>
            <Gamecard title='Pentago'/>
          </Grid>
          <Grid item xs>
            <Gamecard title='Game 2'/>
          </Grid>
          <Grid item xs>
            <Gamecard title='Game 3'/>
          </Grid>
        </Grid>
        <Button sx={{ mt: 10 }} color="success" variant="contained">
          Login
        </Button>
      </div>
    );
  }
