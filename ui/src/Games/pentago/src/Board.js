import {Fragment, useReducer} from 'react';
import { click_on_cell_action, reset_action, button_clicked, rotation_clicked, skip_rotation } from './actions';
import { reducers, createInitialState } from './reducers';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import Stack from '@mui/material/Stack'
import ButtonGroup from '@mui/material/ButtonGroup';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline, Divider} from "@mui/material";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const config = {
    num_rows: 6,
    num_columns: 6,
    h_gap:7,
    cell_width: 50,
    cell_height: 50
}


function Cell(props) {
    const { dispatch, cell, colIdx, rowGroup, timeToRotate} = props;

    const TopLeft = (colIdx < 3 && rowGroup < 3);
    const BottomLeft = (colIdx < 3 && rowGroup >= 3);
    const TopRight = (colIdx >= 3 && rowGroup < 3);
    const bgColor = (TopLeft ? '#ffe6c1' : TopRight ? '#b29c7c' : BottomLeft ? '#b29c7c' : '#ffe6c1');
    return (
        <Fragment>
        <Box sx={{backgroundColor: bgColor}}>
        <Box sx={{
            width: config.cell_width,
            height: config.cell_height,
            backgroundColor: cell['color'],
            border: .75,
            borderColor: 'black',
            borderRadius: '50%'
        }}
             onClick={() => dispatch(click_on_cell_action(colIdx, rowGroup, timeToRotate))}
        />
        </Box>
        </Fragment>
    );
}

function Row(props) {
    const {cell, dispatch, timeToRotate} = props;
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
                props.row.map((cell, idx, rowIdx) =>
                    <Grid item
                          key={idx}
                    >
                        <Cell key={idx}
                              cell={cell}
                              colIdx={idx}
                              rowGroup={props.rowKey}
                              dispatch={dispatch}
                              timeToRotate={timeToRotate}
                        />
                    </Grid>)
            }
        </Grid>
    )
}


function SkipButton(props){
        return (
            <Button 
                id="skipButton"
                sx = {{bgcolor : '#ffe6c1', color : 'black', width: '100%', visibility: 'visible', mt: '-25px', mb: '8px'}}
                onClick={() => props.dispatch(skip_rotation())}>
                Skip Rotation
            </Button>
        )
}

function RotationButton(props){
    const { dispatch, timeToRotate, quadrantToRotate} = props;
    const quadrants = ['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'];
    return (
        < Grid >
        <ButtonGroup variant="contained" aria-label="outlined primary button group"
        sx = {{justifyContent: 'center'}}>
        <Button 
        sx = {{bgcolor : '#ffe6c1', color : 'black', width: '25%'}}
        onClick={() => props.dispatch(button_clicked(quadrants[0], timeToRotate))}>
        Top Left
        </Button>

        <Button
        sx = {{bgcolor : '#b29c7c', color : 'black', width: '25%'}}
        onClick={() => props.dispatch(button_clicked(quadrants[1], timeToRotate))}>
        Top Right
        </Button>

        <Button
        sx = {{bgcolor : '#b29c7c', color : 'black', width: '25%'}}
        onClick={() => props.dispatch(button_clicked(quadrants[2], timeToRotate))}>
        Bottom Left
        </Button>

        <Button
        sx = {{bgcolor : '#ffe6c1', color : 'black', width: '25%'}}
        onClick={() => props.dispatch(button_clicked(quadrants[3], timeToRotate))}>
        Bottom Right
        </Button>
        
        </ButtonGroup>

        <Box textAlign={'center'}>
        
        <ButtonGroup variant="contained" aria-label="outlined primary button group"
        sx = {{bgcolor:'#b29c7c', mx: "auto", width: 150, justifyContent: 'center', mt : 2}}>
           
            <IconButton sx={{color:"black", bgcolor : '##ffe0b2', border : '1', width: '50%'}} 
            onClick={() => props.dispatch(rotation_clicked(quadrantToRotate, timeToRotate, "Left"))} >
            <input hidden accept="image/*" type="file" />
            <TurnLeftIcon  />
            </IconButton>

            <IconButton size={'large'} sx={{color:"black", bgcolor : '##ffe0b2', size:'large', width: '50%'}}
            onClick={() => props.dispatch(rotation_clicked(quadrantToRotate, timeToRotate, "Right"))} >
            <input hidden accept="image/*" type="file" />
            <TurnRightIcon />
            </IconButton>

        </ButtonGroup>
        </Box>
        </Grid>
      );
    }


function TopMessage(props) {

    const {haveAWinner, winnerColor, timeToRotate} = props;
    const playerColor = props.nextColor.charAt(0).toUpperCase() + props.nextColor.slice(1);
    const wColor = winnerColor ? winnerColor.charAt(0).toUpperCase() + winnerColor.slice(1) : null;

    const firstMessage = () => haveAWinner ? `${wColor} Wins. Game Over` : timeToRotate ? `Pick a quadrant to rotate ${playerColor}` : `${playerColor} plays next`;

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
    const {nextColor, winnerColor, haveAWinner, board, timeToRotate, quadrantToRotate} = state;
    const calcWidth = () => config.num_columns * config.cell_width +
        (config.num_columns - 1) * config.h_gap
    return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Fragment>
            <Divider sx = {{mt : 4}}>
        <Chip sx = {{fontWeight: 'bold', fontSize : 16}} label="Pentago by Andrew Tellez"/>
        </Divider>
            <Grid container margin='auto'
                  columns={1}
                  sx={{
                      width: calcWidth(),
                      display: 'flex',
                      direction: 'flex-column',
                      justifyContent: 'center',
                      mt: 5
                  }}
            >
                <Grid item sx={{mb: 3}}>
                    <TopMessage nextColor={nextColor}
                                winnerColor={winnerColor}
                                haveAWinner={haveAWinner}
                                timeToRotate={timeToRotate}
                                dispatch={dispatch}
                    />
                </Grid>
                <SkipButton dispatch={dispatch}/>
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
                                 rowKey={rowIdx}
                                 dispatch={dispatch}
                                 timeToRotate={timeToRotate}
                            />
                        </Grid>))
                }
                 <Grid>
                    <RotationButton
                    quadrantToRotate={quadrantToRotate}
                    timeToRotate={timeToRotate}
                    dispatch={dispatch}
                    />
                </Grid>
            </Grid>



        </Fragment>
    </ThemeProvider>
    );
}

