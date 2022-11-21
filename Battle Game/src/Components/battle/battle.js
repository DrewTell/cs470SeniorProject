import { Party } from "../party"
import { BattleBar } from "./BattleBar"
import { Enemy } from "./Enemy"
import { Fighter } from "./Fighter"
import { UnitSelection } from "./UnitSelection"
import { Options } from "./Options.js"

export const Battle = (props) => {
    const{state, dispatch} = props
    return(
        <div>
            <BattleBar stage={state.stage}/>
            <Enemy dispatch={dispatch} enemy={state.enemy}/>
            <Fighter unit={state.currFighter} dispatch={dispatch}/>
            <Party dispatch={dispatch} units={state.units}></Party>
            <UnitSelection curr={state.currFighter.name} units={state.units} dispatch={dispatch}/>
            <Options state={state} dispatch={dispatch}></Options>
        </div>
    )
}