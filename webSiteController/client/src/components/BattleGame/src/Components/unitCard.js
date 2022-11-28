import { Card, Typography, Button, CardContent, CardActions, Grid, LinearProgress } from '@mui/material';
import { add_member } from '../actions';
import { styled } from '@mui/material/styles';
import "./component.css"
import { Stack } from '@mui/system';

const Item = styled('div')(({ theme }) => ({
    textAlign: 'center',
  }));

export const UnitCard = (props) => {

    const {unit, location, dispatch, unitNum, enemy} = props
    let percentHP = Math.round((unit.currHP / unit.maxHP) * 100)
    let percentXP = Math.round((unit.kills / (unit.lvl + 2)) * 100)
    let hpColor = 'success'
    if(percentHP < 40)
        hpColor = 'inherit'

    if(unit.name === "unitName"){
        return (
            <Card sx={{ width:250, border: 2, bordercolor:'white'}}>
                <CardContent>
                        <Grid container>
                            <Item>
                                Unit Slot {unitNum}
                            </Item>
                        </Grid>
                        <Grid container>
                            <Item className='center'>
                                [Empty]
                            </Item>
                        </Grid>
                </CardContent>
            </Card>
        )
    }
    if (location === "shop"){
        return (
            <Card sx={{ width:250, border: 2, bordercolor:'black'}}>
                <CardContent>
                        <Typography>
                            {unit.name}
                        </Typography>
    
                        <Typography variant="h5" component="div">
                            Lvl: {unit.lvl}
                        </Typography>
    
                        <Typography color="text.secondary">
                            Strength: {unit.strength}   Defense: {unit.defense}
                        </Typography>

                        <Typography color="text.secondary">
                            Accuracy: {unit.accuracy}%
                        </Typography>

                        <Typography>
                           HP: {unit.currHP}/{unit.maxHP}
                        </Typography>

                        <Stack sx={{width:'100%', color:'red'}} spacing={2}>
                            <LinearProgress color={hpColor} sx={{barColorPrimary:'green'}} variant='determinate' value={percentHP}/>
                        </Stack>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>dispatch(add_member(unit, (unit.lvl*100)))}>Purchase Unit: {unit.lvl*100} gold</Button>
                </CardActions>
            </Card>
        )
    }
    else if(location === "enemy"){
        return (
            <Card sx={{ width:250, border: 2, bordercolor:'black'}}>
                <CardContent>
                        <Typography>
                            Enemy {unit.name}
                        </Typography>
    
                        <Typography variant="h5" component="div">
                            Lvl: {unit.lvl}
                        </Typography>
    
                        <Typography color="text.secondary">
                            Strength: {unit.strength}   Defense: {unit.defense}
                        </Typography>

                        <Typography color="text.secondary">
                            Accuracy: {unit.accuracy}%
                        </Typography>
    
                        <Typography>
                        HP: {unit.currHP}/{unit.maxHP}
                        </Typography>

                        <Stack sx={{width:'100%', color:'red'}} spacing={2}>
                            <LinearProgress color={hpColor} sx={{barColorPrimary:'green'}} variant='determinate' value={percentHP}/>
                        </Stack>
                </CardContent>
            </Card>
        )
    }
    else{
        return (
            <Card sx={{ width:250, border: 2, bordercolor:'black'}}>
                <CardContent>
                        <Typography>
                            {unit.name}
                        </Typography>
    
                        <Typography variant="h5" component="div">
                            Lvl: {unit.lvl}
                        </Typography>
    
                        <Typography color="text.secondary">
                            Strength: {unit.strength}   Defense: {unit.defense}
                        </Typography>

                        <Typography color="text.secondary">
                            Accuracy: {unit.accuracy}%
                        </Typography>
    
                        <Typography>
                        HP: {unit.currHP}/{unit.maxHP}
                        </Typography>

                        <Stack sx={{width:'100%', color:'red'}} spacing={2}>
                            <LinearProgress color={hpColor} sx={{barColorPrimary:'green'}} variant='determinate' value={percentHP}/>
                        </Stack>

                        <Typography>
                        XP: {unit.kills}/{unit.lvl + 2}
                        </Typography>

                        <LinearProgress color="primary" variant='determinate' value={percentXP}/>
                </CardContent>
            </Card>
        )
    }
}