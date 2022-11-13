import { Party } from "./party"
import { BattleBar } from "./BattleBar"
import { Enemy } from "./Enemy"
import { Fighter } from "./Fighter"

export const Battle = (props) => {
    const{state, dispatch} = props
    return(
        <div>
            <BattleBar stage={state.stage}/>
            <Enemy dispatch={dispatch} enemy={state.enemy}/>
            <Fighter unit={state.currFighter} dispatch={dispatch}/>
            {state.currFighter.name === "unitName" && "pee pee"}
            <Party dispatch={dispatch} units={state.units}></Party>
        </div>
    )
}