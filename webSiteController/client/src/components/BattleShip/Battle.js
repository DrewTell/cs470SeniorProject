import { Stack } from "@mui/system"
import "./Battleship.css"
import { Cell } from "./Cell"

export const Battle = (props) => {
    const {state, dispatch, channel} = props

    const labels = ['A','B','C','D','E','F','G','H','I','J']

    return (
        <Stack id="board">
            <table id="yourBoard">
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
            <table id="enemyBoard">
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
                                          dispatch={dispatch}/>
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
