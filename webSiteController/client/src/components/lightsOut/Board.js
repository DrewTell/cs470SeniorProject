import {Fragment, useReducer} from 'react';
import { click_on_cell_action, reset_action } from './actions';
import { reducers, createInitialState } from './reducers';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import Stack from '@mui/material/Stack'

const config = {
    num_rows: 6,
    num_columns: 6,
    h_gap:7,
    cell_width: 50,
    cell_height: 50
}


function Cell(props) {
    const { dispatch, cell, colIdx } = props;
    return (
        <Box sx={{
            width: config.cell_width,
            height: config.cell_height,
            backgroundColor: cell['color'],
            border: 1,
            borderColor: 'black',
            borderRadius: '50%'
        }}
             onClick={() => dispatch(click_on_cell_action(colIdx))}
        />
    );
}

function Row(props) {
    const {cell, dispatch } = props;

    return (
        <Grid container
              conlumns={config.num_columns}
              sx={{
                  display: 'flex',
                  direction: 'flex-row',
                  alignContent: 'space-between',
                  justifyContent: 'space-between'
              }}

        >
            {
                props.row.map((cell, idx) =>
                    <Grid item
                          key={idx}
                    >
                        <Cell key={idx}
                              cell={cell}
                              colIdx={idx}
                              dispatch={dispatch}
                        />
                    </Grid>)
            }
        </Grid>
    )
}

function TopMessage(props) {

    const {haveAWinner, winnerColor} = props;

    console.log("TopMessage Status", haveAWinner);
    const firstMessage = () => haveAWinner ? `You Wons. Game Over` : `plays next`;

    return (
        <Stack width='100%'>
            <Typography variant='h6' textAlign='center'>
                {
                    firstMessage()
                }
            </Typography>
            <Button width='100%'
                    sx={{
                        opacity: haveAWinner ? 1 : 0
                    }}
                    onClick={() => props.dispatch(reset_action())}>Reset?
            </Button>
        </Stack>
    )
};

export default function Board(props) {

    const [state, dispatch] = useReducer(reducers, undefined, createInitialState);
    const {nextColor, winnerColor, haveAWinner, board} = state;

    const calcWidth = () => config.num_columns * config.cell_width +
        (config.num_columns - 1) * config.h_gap

    return (
        <Fragment>
            <Grid container margin='auto'
                  columns={1}
                  sx={{
                      width: calcWidth(),
                      display: 'flex',
                      direction: 'flex-column',
                      justifyContent: 'center',
                      mt: 10
                  }}
            >
                <Grid item sx={{mb: 3}}>
                    <TopMessage

                                haveAWinner={haveAWinner}
                                dispatch={dispatch}
                    />
                </Grid>
                {
                    board.map((row, rowIdx) => (
                        <Grid item
                              key={rowIdx}
                              width='100%'
                              sx={{mb: 1}}
                              xs={1}
                        >
                            <Row key={rowIdx}
                                 row={row}
                                 rowIdx={rowIdx}
                                 dispatch={dispatch}
                            />
                        </Grid>))
                }
            </Grid>
        </Fragment>
    );
}

