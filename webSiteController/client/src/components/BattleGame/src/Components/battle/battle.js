import { Party } from "../party"
import { BattleBar } from "./BattleBar"
import { Enemy } from "./Enemy"
import { Fighter } from "./Fighter"
import { UnitSelection } from "./UnitSelection"
import { Options } from "./Options.js"
import "../component.css"
export const Battle = (props) => {
    const{state, dispatch} = props

    let id

    switch(state.stage){
        case 1:
            id = "battle1"
            break;
        case 2:
            id = "battle2"
            break;
        case 3:
            id = "battle3"
            break;
        case 4:
            id = "battle4"
            break;
    }

    return(
        <div id={id}>
            <BattleBar stage={state.stage} enemies={state.enemies}/>
            <Enemy dispatch={dispatch} enemy={state.enemy}/>
            <Fighter unit={state.currFighter} dispatch={dispatch}/>
            <Party dispatch={dispatch} units={state.units} gold={state.gold}></Party>
            <UnitSelection curr={state.currFighter.name} units={state.units} dispatch={dispatch}/>
            <Options state={state} dispatch={dispatch}></Options>
        </div>
    )
}