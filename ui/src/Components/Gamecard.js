import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function GameCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
         <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Game 1
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="Pentago"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcrIqf1mcUrdlPkh61CZDod3VkTBh3a5mzA&usqp=CAU"
      />
      <CardActions>
        <Button size="small">Play</Button>
        <Button size="small">How to Play</Button>
      </CardActions>
    </Card>
  );
}
