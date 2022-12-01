import { Fragment } from "react"
import { UnitCard } from "./unitCard"
import "./component.css"
import { randomizer } from "./randomizer"
import { Button, Stack, Typography } from "@mui/material"
import { Party } from "./party"
import { battle_mode } from "../actions"
import { Unit } from "./unit"
import { Items } from "./items"

export const Shop = (props) => {
    const {units, members, stage, gold, dispatch} = props
    let rand = [randomizer(stage,0), randomizer(stage,0), randomizer(stage,0)]

    return (
        <Fragment>
            <table className="shop">
                <tbody>
                    <tr>
                        <td>
                            <Typography color="black">
                                The Shop
                            </Typography>
                        </td>
                    </tr>
                    {members <= 2 &&
                        <tr>
                        {
                            units.map((unit, idx) => 
                                <td key={idx}>
                                    <Stack>
                                        <UnitCard dispatch={dispatch} unit={rand[idx]} location={'shop'}/>
                                        <Unit dispatch={dispatch} name={rand[idx].name} anim={'Idle'}/>
                                    </Stack>
                                </td>
                            )  
                        }  
                        </tr>
                    }
                    {members === 3 &&
                        <tr>
                        
                                <td>
                                    <Stack>
                                        <Items stage={stage} dispatch={dispatch}/>
                                    </Stack>
                                </td>
                                <td>
                                    <Stack>
                                        <Items stage={stage} dispatch={dispatch}/>
                                    </Stack>
                                </td>
                                <td>
                                    <Stack>
                                        <Items stage={stage} dispatch={dispatch}/>
                                    </Stack>
                                </td>
                            
                        </tr>
                    }
                </tbody>
            </table> 
            <br/>
            <Party dispatch={dispatch} units={units} gold={gold}></Party>
            { members > 0 && 
                <Stack className="battleButton">
                    <Button style={{margin:'auto'}} size="large" onClick={()=>dispatch(battle_mode())}>Battle Phase</Button>
                </Stack>
                
            }
        </Fragment>
    )
}