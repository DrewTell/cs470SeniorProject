import { UnitCard } from "./unitCard";
import "./component.css"
import { Typography } from "@mui/material";

export const Party = (props) => {
    const {dispatch, units} = props;
    return(
        <table className="party">
            <tbody>
                <tr>
                    <td>
                        <Typography>
                            Your party 
                        </Typography>
                    </td>
                </tr>
                <tr>
                {
                    units.map((unit, idx) => 
                        <td key={idx}>
                            <UnitCard dispatch={dispatch} unit={unit} location={'party'}/>
                        </td>
                )  
                }  
                </tr>
            </tbody>
        </table> 
    )
}