import { Typography } from "@mui/material"
import "../component.css"
export const BattleBar = (props) => {
    const{stage, enemies} = props
    return(
        <div className="infoBar">
            <Typography color="white" variant="h4">
                Stage: {stage}/5
            </Typography>
            <Typography color="white" variant="h6">
                Enemy: {enemies}/5
            </Typography>
        </div>
    )
}