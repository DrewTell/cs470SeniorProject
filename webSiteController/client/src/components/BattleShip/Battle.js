import { Typography } from "@mui/material"
import { Stack } from "@mui/system"
import "./Battleship.css"
import { Cell } from "./Cell"
import { Spritesheet } from "./Spritesheet"
import water from "./water.png"


export const Battle = (props) => {
    const {state, dispatch, channel} = props

    const labels = ['A','B','C','D','E','F','G','H','I','J']

    return (
        <Stack id="board">
            <Typography>{state.currPlayer}'s turn to fire!</Typography>
            {
            //for some reason the very first sprite rendered on the page flickers so we render an invisible one first 
            }
            <Spritesheet id="hiddenSprite"
                         image={water} 
                         width={60} 
                         height={60} 
                         steps={20} 
                         fps={10} 
                         loop={true}/>
            <table id="yourBoard">
                <tbody>
                <tr>
                        <th colspan="11">Your Board</th>
                </tr>
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
            <table id="enemyBoard">
                <tbody>
                <tr>
                        <th colSpan="11">Enemy Board</th>
                </tr>
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
                    state.enemyBoard.map((row, rIdx) =>
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
                                          dispatch={dispatch}
                                          hover="target"/>
                                </td>
                                )
                            }
                        </tr>
                        )
                }
                </tbody>
            </table>
        </Stack>
    )
}
