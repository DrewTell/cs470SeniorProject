import { UnitCard } from "./unitCard"

export const Fighter = (props) => {
    const{unit, dispatch} = props
    return(
        <div className="currFighter">
            <UnitCard unit={unit} location="party" dispatch={dispatch}></UnitCard>
        </div>
    )
}