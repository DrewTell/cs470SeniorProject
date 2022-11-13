import { Typography } from "@mui/material"
import { attack, defend } from "../../actions"

export const Options = (props) => {
    const{state, dispatch} = props
    return(
        <div className="selector">
            <Typography className="selector" variant="h4">Fight!</Typography>
            <button onClick={()=>dispatch(attack())}> Attack </button>
            <button onClick={()=>dispatch(defend())}> Defend </button>

        </div>
    )
}