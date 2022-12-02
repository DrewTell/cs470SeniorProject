
import { NUM_ROWS, NUM_COLUMNS, WIN_CONDITION } from './constantsMTT';


const doWeHaveAWinnerThatIncludes = (rowIdx, colIdx, playerSymbol, board) => {

    const doWeHaveAWinnerDownward = (rowIdx, colIdx) => {
        let matchingCells = [{row: rowIdx, column: colIdx}];
        let rowUpCheck = rowIdx - 1;
        rowIdx += 1;
        while(rowIdx < NUM_ROWS && board[rowIdx][colIdx]['playerMarking'] === playerSymbol ) {
            matchingCells.push({row: rowIdx, column: colIdx});
            rowIdx += 1;
        }

        while(rowUpCheck >= 0 && board[rowUpCheck][colIdx]['playerMarking'] === playerSymbol ) {
            matchingCells.push({row: rowUpCheck, column: colIdx});
            rowUpCheck -= 1;
        }

        return matchingCells.length >= WIN_CONDITION ? matchingCells : false;
    };

    const doWehaveAWinnerSideways = (rowIdx, colIdx) => {
        let matchingCells = [{row: rowIdx, column: colIdx}];

        let leftColIdx = colIdx - 1;
        while(leftColIdx >= 0 && board[rowIdx][leftColIdx]['playerMarking'] === playerSymbol ) {
            matchingCells.push({row: rowIdx, column: leftColIdx});
            leftColIdx -= 1;
        }
        let rightColIdx = colIdx + 1;
        while(rightColIdx < NUM_COLUMNS && board[rowIdx][rightColIdx]['playerMarking'] === playerSymbol ) {
            matchingCells.push({row: rowIdx, column: rightColIdx});

            rightColIdx += 1;
        }
        return matchingCells.length >= WIN_CONDITION ? matchingCells : false;

    };

    const dowWeHaveAWinnerOnRightDiagonal = (rowIdx, colIdx) => {
        let matchingCells = [{row: rowIdx, column: colIdx}];

        let downRowIdx = rowIdx + 1;
        let downColIdx = colIdx + 1;

        while (downRowIdx < NUM_ROWS && downColIdx < NUM_COLUMNS &&
        board[downRowIdx][downColIdx]['playerMarking'] === playerSymbol) {
            matchingCells.push({row: downRowIdx, column: downColIdx});

            downRowIdx += 1;
            downColIdx += 1;

        }
        let upRowIdx = rowIdx - 1;
        let upColIdx = colIdx - 1;
        while (upRowIdx >= 0 && upColIdx >= 0 &&
        board[upRowIdx][upColIdx]['playerMarking'] === playerSymbol) {
            matchingCells.push({row: upRowIdx, column: upColIdx});
            upRowIdx -= 1;
            upColIdx -= 1;

        }
        return matchingCells.length >= WIN_CONDITION ? matchingCells : false;

    };

    const dowWeHaveAWinnerOnLeftDiagonal = (rowIdx, colIdx) => {
        let matchingCells = [{row: rowIdx, column: colIdx}];

        let downRowIdx = rowIdx + 1;
        let downColIdx = colIdx - 1;
        while (downRowIdx < NUM_ROWS && downColIdx >= 0 &&
        board[downRowIdx][downColIdx]['playerMarking'] === playerSymbol) {
            matchingCells.push({row: downRowIdx, column: downColIdx});
            downRowIdx += 1;
            downColIdx -= 1;

        }
        let upRowIdx = rowIdx - 1;
        let upColIdx = colIdx + 1;
        while (upRowIdx >= 0 && upColIdx < NUM_COLUMNS &&
        board[upRowIdx][upColIdx]['playerMarking'] === playerSymbol) {
            matchingCells.push({row: upRowIdx, column: upColIdx});
            upRowIdx -= 1;
            upColIdx += 1;

        }
        return matchingCells.length >= WIN_CONDITION ? matchingCells : false;
    };
    const result = doWeHaveAWinnerDownward(rowIdx, colIdx) ||
        doWehaveAWinnerSideways(rowIdx, colIdx) ||
        dowWeHaveAWinnerOnLeftDiagonal(rowIdx, colIdx) ||
        dowWeHaveAWinnerOnRightDiagonal(rowIdx, colIdx);

    console.log("Result in do we have a winner: ", result);
    return doWeHaveAWinnerDownward(rowIdx, colIdx) ||
        doWehaveAWinnerSideways(rowIdx, colIdx) ||
        dowWeHaveAWinnerOnLeftDiagonal(rowIdx, colIdx) ||
        dowWeHaveAWinnerOnRightDiagonal(rowIdx, colIdx);

};

export default doWeHaveAWinnerThatIncludes;