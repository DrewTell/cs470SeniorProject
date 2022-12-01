import { Party } from "../party"
import { BattleBar } from "./BattleBar"
import { Enemy } from "./Enemy"
import { Fighter } from "./Fighter"
import { UnitSelection } from "./UnitSelection"
import "./battle.css"
import { Log } from "./log"
import { Button, Stack } from "@mui/material"
import { Floor } from "./floor"
import { attack, defend } from "../../actions"
import { useState } from "react"

export const Battle = (props) => {
    const{state, dispatch} = props

    let id = "battle" + `${state.stage}`
    let check = state.currFighter.name !== "unitName"
    const [fAnim, setfAnim] = useState(state.fAnimation)
    const [eAnim, seteAnim] = useState(state.eAnimation)


    function changeAnims(f, e, time){
        setfAnim(f)
        seteAnim(e)
        setTimeout(() => {
            setfAnim(f)
            seteAnim(e)
          }, 1000*time)
    }
    return(
        <Stack id={id} className="battle">
            <BattleBar stage={state.stage} enemies={state.enemies}/>
            <Enemy dispatch={dispatch} enemy={state.enemy} animation={eAnim}/>
            <Fighter unit={state.currFighter} dispatch={dispatch} animation={fAnim}/>
            <Floor/>
            <Party dispatch={dispatch} units={state.units} gold={state.gold}></Party>
            <UnitSelection curr={state.currFighter.name} units={state.units} dispatch={dispatch}/>
            <Log log={state.fightText}/>
            <Stack className="logButtons">
                {      
                    check && <Button variant="outlined" onClick={()=>{dispatch(attack()); 
                                                                      changeAnims("Attack","Defend",0)
                                                                      changeAnims("Defend","Attack",1)
                                                                      changeAnims("Idle","Idle",2)        
                                                                                        }}> Attack </Button>
                }
                {
                    check && <Button variant="outlined" onClick={()=>{dispatch(defend());
                                                                      changeAnims("Defend","Attack",0)
                                                                      changeAnims("Idle","Idle",1)
                                                                                        }}> Defend </Button>
                }
            </Stack>
        </Stack>
    )
}