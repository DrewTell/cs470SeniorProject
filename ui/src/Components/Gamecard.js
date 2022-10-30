import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Menu from './Menu';
import { useNavigate } from 'react-router-dom';


export default function GameCard(props) {
  

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `Pentago`; 
    navigate(path);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
         <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="Pentago"
        height="160"
        image="https://ae01.alicdn.com/kf/HTB1I49yaRSD3KVjSZFqq6A4bpXaI.jpg"
      />
      <CardActions>
        <Button onClick={routeChange} size="small">Play</Button>
        <Button size="small">How to Play</Button>
      </CardActions>
    </Card>
  );
}
