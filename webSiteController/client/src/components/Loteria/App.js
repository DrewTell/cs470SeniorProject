import "./App.css";
import Header from "./Components/Header";
import CardComponent from "./Components/Card";
import { NextCard } from "./Components/Card";
import { Typography, Grid, Button, Table, Box, Stack } from "@mui/material";

function App() {
  const genereateArr = () => {
    let tempSet = new Set();
    while (tempSet.size !== 16) {
      let randIndx = Math.floor(Math.random() * 54);
      tempSet.add(randIndx);
    }
    let res = [...tempSet];
    console.log(res);
    return res;
  };

  const arr1 = genereateArr();
  const arr2 = genereateArr();
  const arr3 = genereateArr();
  const arr4 = genereateArr();

  return (
    <>
      <Header />
      <NextCard />
      <Grid display="flex" pb={10}>
        <Stack mx={"auto"}>
          <Box sx={{ mx: "auto", bgcolor: "#b29c7c" }}>
            <CardComponent arr={arr1} />
          </Box>
          <Button
            sx={{
              color: "white",
              my: 2.5,
              mx: "auto",
              bgcolor: "green",
              width: 100,
            }}
          >
            Loteria
          </Button>
        </Stack>
        <Stack mx={"auto"}>
          <Box sx={{ mx: "auto", bgcolor: "#b29c7c" }}>
            <CardComponent arr={arr2} />
          </Box>
          <Button
            sx={{
              color: "white",
              my: 2.5,
              mx: "auto",
              bgcolor: "green",
              width: 100,
            }}
          >
            Loteria
          </Button>
        </Stack>
        <Stack mx={"auto"}>
          <Box sx={{ mx: "auto", bgcolor: "#b29c7c" }}>
            <CardComponent arr={arr3} />
          </Box>
          <Button
            sx={{
              color: "white",
              my: 2.5,
              mx: "auto",
              bgcolor: "green",
              width: 100,
            }}
          >
            Loteria
          </Button>
        </Stack>
        <Stack mx={"auto"}>
          <Box sx={{ mx: "auto", bgcolor: "#b29c7c" }}>
            <CardComponent arr={arr4} />
          </Box>
          <Button
            sx={{
              color: "white",
              my: 2.5,
              mx: "auto",
              bgcolor: "green",
              width: 100,
            }}
          >
            Loteria
          </Button>
        </Stack>
      </Grid>
    </>
  );
}

export default App;
