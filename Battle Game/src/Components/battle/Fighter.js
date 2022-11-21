import { UnitCard } from "../unitCard"
import { Unit } from "../unit"

export const Fighter = (props) => {
    const{unit, dispatch} = props
    return(
        <div className="currFighter">
            <UnitCard unit={unit} location="party" dispatch={dispatch}></UnitCard>
            {unit.name !== "unitName" && <Unit dispatch={dispatch} name={unit.name} anim={'Idle'}/>}
        </div>
    )
}