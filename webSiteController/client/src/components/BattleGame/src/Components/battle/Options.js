import { Typography } from "@mui/material"
import { attack, defend, update_log } from "../../actions"
import {Button} from "@mui/material"
import "../component.css"

export const Options = (props) => {
    const{state, dispatch} = props
    let log = state.fightText
    let check = state.currFighter.name !=="unitName"
    
    return(
        <div className="logButtons">
            {      
                check && <Button onClick={()=>dispatch(attack(), update_log())}> Attack </Button>
            }
            {
                check && <Button onClick={()=>dispatch(defend(), update_log())}> Defend </Button>
            }
            <div id="log">
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