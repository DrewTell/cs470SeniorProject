import { Party } from "../party"
import { BattleBar } from "./BattleBar"
import { Enemy } from "./Enemy"
import { Fighter } from "./Fighter"
import { UnitSelection } from "./UnitSelection"
import "./battle.css"
import { Log } from "./log"
import { Button, Stack } from "@mui/material"
import { Floor } from "./floor"
import { advance_enemy, advance_stage, attack, defend, fighter_death } from "../../actions"
import { useState } from "react"
import { Unit } from "../unit"

export const Battle = (props) => {
    const{state, dispatch} = props


    let blankUnit = {name: "unitName", lvl:0, strength:0, defense:0, currHP: 0, maxHP: 0}
    let unit = state.currFighter
    let id = "battle" + `${state.stage}`
    let check = unit.name !== "unitName"
    const [fAnim, setfAnim] = useState(state.fAnimation)
    const [eAnim, seteAnim] = useState(state.eAnimation)
    const [ID, setID] = useState("logButtons")

    function changeAnims(f, e, time){
        setID("logButtonsH")
        setTimeout(() => {
            if(e === "Idle")
                setID("logButtons")
            setfAnim(f)
            seteAnim(e)
          }, 1000*time)
    }

    function advanceEnemy(time){
        setTimeout(() => {
            setTimeout(() => {
                if (state.currFighter.currHP <= 0)
                    return dispatch(fighter_death())
                if(state.enemy.currHP > 0){
                    return
                }
                else if (state.enemies >= 5)
                    return dispatch(advance_stage())
                else
                    return dispatch(advance_enemy())
              }, 1000*time-1)
        }, 100)
    }
    

    return(
        <Stack id={id} className="battle">
            <BattleBar stage={state.stage} enemies={state.enemies}/>
            <Enemy dispatch={dispatch} enemy={state.enemy} animation={eAnim}/>
            <Fighter unit={state.currFighter} dispatch={dispatch} animation={fAnim}/>
            <div className="fightScene">
                <Stack className="eSprite">
                    <Unit dispatch={dispatch} name={state.enemy.name} anim={eAnim}/>
                </Stack>
                <Stack className="fSprite">
                    {unit.name !== "unitName" && <Unit dispatch={dispatch} name={unit.name} anim={fAnim}/>}
                </Stack>
                <Floor/>
            </div>
            <Party dispatch={dispatch} units={state.units} gold={state.gold}></Party>
            <UnitSelection curr={state.currFighter.name} units={state.units} dispatch={dispatch}/>
            <Log log={state.fightText}/>
            <Stack id={ID}>
                {      
                    check && <Button variant="outlined" onClick={()=>{dispatch(attack())
                                                                      changeAnims("Attack","Defend",0)
                                                                      changeAnims("Defend","Attack",1)
                                                                      changeAnims("Idle","Idle",2)
                                                                      advanceEnemy(2)        
                                                                                        }}> Attack </Button>
                }
                {
                    check && <Button variant="outlined" onClick={()=>{dispatch(defend())
                                                                      changeAnims("Defend","Attack",0)
                                                                      changeAnims("Idle","Idle",1)
                                                                      advanceEnemy(1)
                                                                                        }}> Defend </Button>
                }
            </Stack>
        </Stack>
    )
}