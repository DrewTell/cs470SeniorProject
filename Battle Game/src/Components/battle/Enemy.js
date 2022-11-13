import { UnitCard } from "../unitCard"

export const Enemy = (props) => {
    const{enemy, dispatch} = props
    return(
        <div className="enemy">
            <UnitCard unit={enemy} location="enemy" dispatch={dispatch}></UnitCard>
        </div>
    )
}