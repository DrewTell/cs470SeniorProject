import { Fragment } from "react"
import { UnitCard } from "./unitCard"
import "./component.css"
import { randomizer } from "./randomizer"
import { Button, Typography } from "@mui/material"
import { Party } from "./party"
import { battle_mode } from "../actions"
import { Unit } from "./unit"

export const Shop = (props) => {
    const {units, members, dispatch} = props
    let rand = [randomizer(2,1), randomizer(2,1), randomizer(2,1)]

    return (
        <Fragment>
            <table className="shop">
                <tbody>
                    <tr>
                        <td>
                            <Typography>
                                The Shop 
                            </Typography>
                        </td>
                    </tr>
                    <tr>
                    {
                        units.map((unit, idx) => 
                            <td key={idx}>
                                <div>
                                    <UnitCard dispatch={dispatch} unit={rand[idx]} location={'shop'}/>
                                    <Unit dispatch={dispatch} name={rand[idx].name} anim={'Idle'}/>
                                </div>
                            </td>
                    )  
                    }  
                    </tr>
                </tbody>
            </table> 
            <br/>
            <Party units={units}></Party>
            { members === 3 && 
                <div className="battleButton">
                    <Button style={{margin:'auto'}} size="large" onClick={()=>dispatch(battle_mode())}>Battle Phase</Button>
                </div>
                
            }
        </Fragment>
    )
}