import { Stack } from "@mui/material"
import { Unit } from "../unit"
import { UnitCard } from "../unitCard"
import { Floor } from "./floor"
import "./battle.css"

export const Enemy = (props) => {
    const{enemy, dispatch, animation} = props
    return(
        <Stack className="enemy">
            <UnitCard unit={enemy} location="enemy" dispatch={dispatch}></UnitCard>
            <Stack className="eSprite">
                <Unit dispatch={dispatch} name={enemy.name} anim={animation}/>
            </Stack>
        </Stack>
    )
}