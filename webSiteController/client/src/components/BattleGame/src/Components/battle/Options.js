import { Stack, Typography } from "@mui/material"
import { attack, defend, idle, e_attack } from "../../actions"
import {Button} from "@mui/material"
import "../component.css"

export const Options = (props) => {
    const{state, dispatch} = props
    let check = state.currFighter.name !=="unitName"
    
    return(
        <div className="logButtons">
            {      
                    check && <Button variant="outlined" onClick={()=>{dispatch(attack());
                                                                      //dispatch(e_attack);
                                                                      //dispatch(idle);             
                                                                                        }}> Attack </Button>
                }
                {
                    check && <Button variant="outlined" onClick={()=>{dispatch(defend());
                                                                      //dispatch(idle(1));
                                                                                        }}> Defend </Button>
                }
        </div>
        
    )
}