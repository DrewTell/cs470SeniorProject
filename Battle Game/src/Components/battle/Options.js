import { Typography } from "@mui/material"
import { attack, defend } from "../../actions"

export const Options = (props) => {
    const{state, dispatch} = props
    let log = state.fightText
    let check = state.currFighter.name !=="unitName"
    
    return(
        <div className="selector">
            {
                check && <Typography variant="h4">Fight!</Typography>
            }
            {      
                check && <button onClick={()=>dispatch(attack())}> Attack </button>
            }
            {
                check && <button onClick={()=>dispatch(defend())}> Defend </button>
            }
            { check &&
                <div className="log">
                    {
                        log.map((message, idx) => 
                            <Typography key={idx}>
                                {message}
                            </Typography>
                    )  
                    } 
            </div>
            }
        </div>
        
    )
}