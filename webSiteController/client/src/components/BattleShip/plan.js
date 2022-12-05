import "./Battleship.css"
import { Button, Stack, Typography } from '@mui/material';
import { Cell }  from "./Cell.js"
import { rotation } from "./actions";


export const Plan = (props) => {
    const {state, dispatch} = props

    const labels = ['A','B','C','D','E','F','G','H','I','J']

    let direction = ""
    switch(state.rotation){
        case 0:
            direction = "right"
            break
        case 1:
            direction = "down"
            break
        case 2:
            direction = "left"
            break
        case 3:
            direction = "up"
            break

    }

    return (
        <Stack id="board">
            <Typography variant="h4"> Battleship</Typography>
            <Typography variant="h5"> {state.shipsSet}/5 ships placed</Typography>
            <Typography variant="h6"> Placed ships will currently extend {direction}</Typography>
            <table>
                <tbody>
                <tr>
                        <th className="invisible">0</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                </tr>
                {
                    state.board.map((row, rIdx) =>
                        <tr key={rIdx}>
                            <td>
                                {labels[rIdx]}
                            </td>
                            {
                                row.map((cell, cIdx) =>
                                <td key={(cIdx)}>
                                    <Cell occupied={cell.isOccupied}
                                          row={rIdx}
                                          col={cIdx}
                                          ship={cell.type}
                                          rotation={cell.rotate}
                                          dispatch={dispatch}/>
                                </td>
                                )
                            }
                        </tr>
                        )
                }
                </tbody>
            </table>
            <Button id="rotate" onClick={() => { dispatch(rotation())}}>Change Rotation</Button>
        </Stack>
    )
}
