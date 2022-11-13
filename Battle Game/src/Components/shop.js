import { Fragment } from "react"
import { UnitCard } from "./unitCard"
import "./component.css"
import { randomizer } from "./randomizer"
import { Button, Typography } from "@mui/material"
import { Party } from "./party"
import { battle_mode } from "../actions"

export const Shop = (props) => {
    const {units, members, dispatch} = props
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
                                <UnitCard dispatch={dispatch} unit={randomizer(2,1)} location={'shop'}/>
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