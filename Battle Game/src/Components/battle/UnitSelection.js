import { Typography } from "@mui/material"
import "../component.css"
import { set_fighter } from "../../actions"
export const UnitSelection = (props) => {
    const{units, dispatch} = props
    return(
        <div className="selector">
            <Typography variant="h4">
                Select Your Fighter Below
            </Typography>

            <button style={{visibility:"hidden"}} onClick={()=>console.log("wee")}>Attack</button>
            <button style={{visibility:"hidden"}} onClick={()=>console.log("wee")}>Defend</button>
            <div className="party">
                <button className="hidden1" onClick={()=>dispatch(set_fighter(0))}>1</button>
                <button className="hidden2" onClick={()=>dispatch(set_fighter(1))}>2</button>
                <button className="hidden3" onClick={()=>dispatch(set_fighter(2))}>3</button>
            </div>
        </div>
    )
}