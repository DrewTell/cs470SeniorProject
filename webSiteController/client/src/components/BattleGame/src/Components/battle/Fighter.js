import { UnitCard } from "../unitCard"
import { Unit } from "../unit"
import { Floor } from "./floor"
import { Stack } from "@mui/material"
import "./battle.css"

export const Fighter = (props) => {
    const{unit, dispatch, animation} = props
    return(
        <Stack className="currFighter">
            <UnitCard unit={unit} location="fight" dispatch={dispatch}></UnitCard>
            <Stack className="fSprite">
                {unit.name !== "unitName" && <Unit dispatch={dispatch} name={unit.name} anim={animation}/>}
            </Stack>
        </Stack>
    )
}