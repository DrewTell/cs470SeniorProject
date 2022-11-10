import { Card, Typography, Button, CardContent, CardActions } from '@mui/material';
import { add_member } from '../actions';
export const UnitCard = (props) => {

    let unit = props.unit
    let location = props.location
    let dispatch = props.dispatch
    
    if (location === "shop"){
        return (
            <Card sx={{ width:250, border: 1, bordercolor:'black'}}>
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
    
                        <Typography>
                           HP: {unit.HP}
                        <br />
                           HP bar goes here
                        </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={()=>dispatch(add_member(unit))}>Purchase Unit</Button>
                </CardActions>
            </Card>
        )
    }
    else{
        return (
            <Card sx={{ width:250, border: 1, bordercolor:'black'}}>
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
    
                        <Typography>
                           HP: {unit.HP}
                        <br />
                           HP bar goes here
                        </Typography>
                </CardContent>
            </Card>
        )
    }
}