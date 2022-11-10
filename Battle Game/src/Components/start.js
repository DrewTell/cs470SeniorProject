import { Fragment, Grid, Item, useEffect } from "react"
import { UnitCard } from "./unitCard"
import "./start.css"
import { shop_mode } from "../actions"
import { Button } from "@mui/material"

export const Start = (props) => {
    let dispatch = props.dispatch
    let units = props.units
    return (
        <Fragment>
            <table className="party">
                <tbody>
                    <tr className="center">
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
            <Button sx={{ml:1}} variant="contained" onClick={()=>dispatch(shop_mode())}>Enter Shop</Button>
        </Fragment>
    )
}