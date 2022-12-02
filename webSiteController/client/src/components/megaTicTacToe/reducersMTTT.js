import {NUM_ROWS, NUM_COLUMNS} from "./constantsMTT";
import doWeHaveAWinnerThatIncludes from "./doWeHaveAWinnerMTT";

const advanceTurn = (turn) => turn === 'player1' ? 'player2' : 'player1';

function createInitialState(player1Points, player2Points, winningPlayer) {
    // The board is a 2D array of Objects. Each Object holds the state of the "cell" that it represents.
    // Each of the elements of firstAvailableIndex contains an index for each column of the 2D array.
    // The value at the index specifies which row in that column a disk can be deposited.

    let score1 = 0;
    let score2 = 0;
    let playerToStart = 'player1';
    if (player1Points !== undefined && player2Points !== undefined && winningPlayer !== undefined){
        score1 = player1Points;
        score2 = player2Points;
        playerToStart = (winningPlayer === 'player1' ? 'player2' : 'player1');
    }
    let board = Array(NUM_ROWS).fill(Array(NUM_COLUMNS).fill(Array(NUM_ROWS).fill(Array(NUM_COLUMNS).fill({color: 'gray', isOccupied: false, playerMarking: null}))));
    board = board.map((megaColumn, megaColumnIdx) => board.map((megaRow, megaRowIdx) => megaRow.map((row, rowIdx) => row.map((col, colIdx) => {
        return {...board[rowIdx][colIdx], row: rowIdx, column: colIdx, megaRow: megaRowIdx, megaColumn: megaColumnIdx}
        }))));

    let freshBoard = Array(NUM_ROWS).fill(Array(NUM_COLUMNS).fill({color: 'gray', isOccupied: false, playerMarking: null}));
    freshBoard = freshBoard.map((row, rowIdx) => row.map( (col, colIdx) => {
        return {...freshBoard[rowIdx][colIdx], row: rowIdx, column: colIdx }}));

    return {
        board,
        haveAWinner: false,
        winningPlayer: null,
        turn: playerToStart,
        player1Score: score1,
        player2Score: score2,
        grandBoard: freshBoard,
        forcedPlay: -1,


    };
}

async function sendState(newState, channel){
    let roughObjSize = JSON.stringify(newState).length;
    console.log("obj size: ", roughObjSize);
    await channel.sendEvent({
        type: "game-move",
        data: {newState},
    })
};

async function sendGameMove(gameMove, channel){
    await channel.sendEvent({
        type: "enemy-move",
        data: {gameMove},
    })
};


function clientIntegrateClick(state, row, col, megaRow, megaCol, marking, playerSymbol){
    console.log("Working with client grandboard", state.grandBoard);
    let nextTurn = advanceTurn(state.turn);
    let board = state.board;

    let affectedRow = board[megaRow][megaCol][row].slice();
    affectedRow[col] = {
        ...affectedRow[col],
        color: marking,
        isOccupied: true,
        playerMarking: playerSymbol,
    };
    let newBoard = board.slice();
    newBoard[megaRow][megaCol][row] = affectedRow;

    const newMoves = state.movesTaken + 1;
    let newState = {
        ...state,
        board: newBoard,
        turn: nextTurn,
        movesTaken: newMoves,
    };
    const tinyBoard = board[megaRow][megaCol].slice()
    if( doWeHaveAWinnerThatIncludes(row, col, playerSymbol, tinyBoard) ) {
        let doHaveResult = doWeHaveAWinnerThatIncludes(row, col, playerSymbol, tinyBoard);
        console.log("after do wehave Mega Row, Mega Col: ", megaRow, megaCol);
        console.log(state.grandBoard);
        let newGrandBoard = state.grandBoard.slice()
        let tempGrandCell = newGrandBoard[megaRow][megaCol];
        tempGrandCell ={
          color: 'gray',
          isOccupied: true,
          playerMarking: playerSymbol,
        };


        newGrandBoard[megaRow][megaCol] = tempGrandCell;

        let player1Points = ('X' === playerSymbol ? 1 : 0);
        let player2Points = ('O' === playerSymbol ? 1 : 0);
        player1Points += newState.player1Score;
        player2Points += newState.player2Score;

        newState = {
            ...newState,
            // haveAWinner: true,
            // winningPlayer: state.turn,
            player1Score: player1Points,
            player2Score: player2Points,
            grandBoard: newGrandBoard,
        };
    }

    return newState;
}

function integrateClick(state, colIdx, rowGroup, channel, turn, megaCol, megaRow, marker, playerSym ) {
    const marking = (turn === 'player1' ? 'black' : 'white');
    const playerSymbol = (turn === 'player1' ? 'X' : 'O');

    const gameMove = {
        row: rowGroup,
        col: colIdx,
        megaRow: megaRow,
        megaCol: megaCol,
        marking: marking,
        playerSymbol: playerSymbol,
    }

    let nextTurn = advanceTurn(turn);


    let stateBoard = state.board;
    let affectedRow = stateBoard[megaRow][megaCol][rowGroup].slice();
    affectedRow[colIdx] = {
        ...affectedRow[colIdx],
        color: marking,
        isOccupied: true,
        playerMarking: playerSymbol,
    };
    console.log("affected row col id: ", affectedRow[colIdx]);
    stateBoard[megaRow][megaCol][rowGroup] = affectedRow
    const newMoves = state.movesTaken + 1;

    let newState = {
        ...state,
        board: stateBoard,
        turn: nextTurn,
        movesTaken: newMoves,
    };
    const tinyBoard = stateBoard[megaRow][megaCol].slice()
    if( doWeHaveAWinnerThatIncludes(rowGroup, colIdx, playerSymbol, tinyBoard) ) {
        console.log("This is dowehaveawinner function: ", (doWeHaveAWinnerThatIncludes(rowGroup, colIdx, playerSymbol, tinyBoard)));
        console.log("Before a winner this is grand board: ", state.grandBoard);
        let tempGrandCell = state.grandBoard[megaRow][megaCol];
        tempGrandCell ={
            ...tempGrandCell,
            isOccupied: true,
            playerMarking: playerSymbol,
        };
        let newGrandBoard = state.grandBoard.slice()

        newGrandBoard[megaRow][megaCol] = tempGrandCell;
        let player1Points = ('X' === playerSymbol ? 1 : 0);
        let player2Points = ('O' === playerSymbol ? 1 : 0);
        player1Points += newState.player1Score;
        player2Points += newState.player2Score;
        console.log("After having a winner this is grand board: ", newGrandBoard);
        newState = {
            ...newState,
            // haveAWinner: true,
            // winningPlayer: turn,
            player1Score: player1Points,
            player2Score: player2Points,
            grandBoard: newGrandBoard,
        };
    }

    sendGameMove(gameMove, channel);
    console.log("state after integrate click:", state);
    return newState;
}


function reducers(state, action) {
    console.log("In reducer: ", state);
    if( state === undefined )
        return state;

    if( action.type === 'RESET' ) {
        console.log("In reset:");
        let channel = action.channel;
        let newState = createInitialState(state.identity, state.player1Score, state.player2Score, state.winningPlayer);
        //If this sentResetState was put inside createInitialState, the game board would reset on exit and rejoin to the lobby
        //This might be a good idea because the games currently are desynced until a move is played on exit and rejoin
        sendState(newState, channel);
        return newState
    } else if( action.type === 'CELL_CLICKED') {
        if (state.haveAWinner)
            return state;
        if (state.board[action.megaRow][action.megaCol][action.rowGroup][action.colIdx].isOccupied === true) {
          // column is full
            return state;
        }
        if (state.grandBoard[action.megaRow][action.megaCol].isOccupied === true){
            //A player has won this mini board
            return state;
        }
        return integrateClick(state, action.colIdx, action.rowGroup, action.channel, action.turn, action.megaCol, action.megaRow);
    }


    else if(action.type === 'UPDATE'){
        let temp = action.newState
        //update game move
        let newState = {
            ...temp,
        }
        //update win
        if(temp.haveAWinner){
            newState = {
                ...newState,
            }
        }
        return newState
    }
    else if(action.type === 'ENEMY_MOVE'){
        const gameMove = action.gameMove;
        const {row, col, megaRow, megaCol, marking, playerSymbol} = gameMove;

        return clientIntegrateClick(state, row, col, megaRow, megaCol, marking, playerSymbol);
    }
    else if (action.type === 'CHECK_STATE'){
        //GrandBoard holds the result of the 9 mini boards
        //When mapping through the entire board check state is called on the each board
        //if that board has a winner then we will return a box that shows the winner
        //of that small grid.
        let displayWinner = (state.grandBoard[action.megaRow][action.megaCol].isOccupied === true ? true : false);
        console.log(displayWinner);
        return state;
    }
    else if(action.type === 'DO_NOTHING'){
        return state;
    }

    return state;

}

export {
    reducers,
    createInitialState
};