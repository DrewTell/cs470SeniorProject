import "./Battleship.css"
import { Button, Stack, Typography } from '@mui/material';
import { Cell }  from "./Cell.js"
import { rotation, start } from "./actions";


export const Plan = (props) => {
    const {state, dispatch, channel} = props

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
            <Typography variant="h5"> {state.shipsSet}/5 ships placed - - - - enemy ready? {state.enemyReady.toString()}</Typography>
            {state.mode === 'plan' ? 
                            <Typography variant="h6"> Placed ships will currently extend {direction}</Typography> :
                            <Typography variant="h6"> Battle will start when enemy is ready!</Typography>
            
            }
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
                                    <Cell occupied={cell.x}
                                          row={rIdx}
                                          col={cIdx}
                                          ship={cell.y}
                                          rotation={cell.z}
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
            {state.shipsSet === 5 && <Button id="startButton" onClick={() => { dispatch(start(state.board, channel))}}>Start Battle!</Button>}
        </Stack>
    )
}
