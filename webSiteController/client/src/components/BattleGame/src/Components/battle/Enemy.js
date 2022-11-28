import { Unit } from "../unit"
import { UnitCard } from "../unitCard"
import { Floor } from "./floor"

export const Enemy = (props) => {
    const{enemy, dispatch} = props
    return(
        <div className="enemy">
            <UnitCard unit={enemy} location="enemy" dispatch={dispatch}></UnitCard>
            <Unit dispatch={dispatch} name={enemy.name} anim={'Idle'}/>
            <Floor/>
        </div>
    )
}