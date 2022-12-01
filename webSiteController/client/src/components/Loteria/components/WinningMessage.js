import React from 'react'
import { Typography, Grid } from "@mui/material";

function WinningMessage(props) {

  return (
    <Grid container sx={{ mb:2.5, mx:"auto", justifyContent: "center",}}>
      <Typography textAlign={"center"} variant="h5"  fontFamily={'Raleway'} color={"white"} gutterBottom>
        Player {props.player} called Loteria.
      </Typography>
    </Grid>
  )
}

export default WinningMessage
