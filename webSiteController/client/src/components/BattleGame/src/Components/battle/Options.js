import { Typography } from "@mui/material"
import { attack, defend } from "../../actions"
import {Button} from "@mui/material"
import "../component.css"

export const Options = (props) => {
    const{state, dispatch} = props
    let log = state.fightText
    let check = state.currFighter.name !=="unitName"
    
    return(
        <div className="logButtons">
            {      
                check && <Button onClick={()=>dispatch(attack())}> Attack </Button>
            }
            {
                check && <Button onClick={()=>dispatch(defend())}> Defend </Button>
            }
            <div className="log">
                {
                    log.map((message, idx) => 
                        <Typography key={idx}>
                            {message}
                        </Typography>
                )  
                } 
            </div>
        </div>
        
    )
}