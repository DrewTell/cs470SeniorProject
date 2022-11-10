import { Fragment } from "react"
import { UnitCard } from "./unitCard"
import "./start.css"
import { randomizer } from "../randomizer"
import { Button } from "@mui/material"

export const Shop = (props) => {
    let units = props.units
    let dispatch = props.dispatch
    console.log("units in shop", units) 
    return (
        <Fragment>
            <div>
            <table style={{margin:'auto'}}>
                <tbody>
                    <tr>
                        <td>
                            The Shop    
                        </td>  
                    </tr>
                    <tr className="party">
                    {
                        units.map((unit, idx) => 
                            <td key={idx}>
                                <UnitCard dispatch={dispatch} unit={randomizer()} location={'shop'}/>
                            </td>
                    )  
                    }  
                    </tr>
                </tbody>
            </table>
            <br/>
            <table style={{margin:'auto'}}>
                <tbody>
                    <tr>
                        <td>
                            Your party
                        </td>
                    </tr>
                    <tr className="party">
                    {
                        units.map((unit, idx) => 
                            <td key={idx}>
                                <UnitCard dispatch={dispatch} unit={unit} location={'party'}/>
                            </td>
                    )  
                    }  
                    </tr>
                </tbody>
            </table> 
                <Button style={{margin:'auto'}}size="small" onClick={()=>console.log("yay")}>Battle Phase</Button>
            </div>
        </Fragment>
    )
}