import { Unit } from "../unit"
import { UnitCard } from "../unitCard"

export const Enemy = (props) => {
    const{enemy, dispatch} = props
    return(
        <div className="enemy">
            <UnitCard unit={enemy} location="enemy" dispatch={dispatch}></UnitCard>
            <Unit dispatch={dispatch} name={enemy.name} anim={'Idle'}/>
        </div>
    )
}