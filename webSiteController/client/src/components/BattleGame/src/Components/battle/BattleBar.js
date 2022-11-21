import { Typography } from "@mui/material"

export const BattleBar = (props) => {
    const{stage} = props
    return(
        <div className="infoBar">
            <Typography color="black" variant="h6">
                Stage: {stage}/10
            </Typography>
        </div>
    )
}