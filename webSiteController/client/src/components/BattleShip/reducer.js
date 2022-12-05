import { ActionsIcon } from "stream-chat-react";

let SHIP_SIZES = [2,3,3,4,5]

function createInitialState() {
    let board = Array(10).fill(Array(10).fill({y:"", z:0}));
    let targets = Array(10).fill(Array(10).fill({ hit:false, fired:false}));

    return {
        mode: 'plan',
        board:board,
        shipsSet:0,
        haveWinner:false,
        rotation:0,
        enemyBoard:board,
        enemyReady:false,
        targetBoard:targets,
        playerName:"",
        enemyName:"",
        currPlayer:"",
        hitTotal:0,
        hits1:0,
        hits2:0,
        hits3:0,
        hits4:0,
        hits5:0,
    };
}

function rotationMods(state){
    let rotation = state.rotation
    let rowMod, colMod
    switch(rotation){
        case 0:
            rowMod = 0
            colMod = 1
            break
        case 1:
            rowMod = 1
            colMod = 0
            break
        case 2:
            rowMod = 0
            colMod = -1
            break
        case 3:
            rowMod = -1
            colMod = 0
            break
    }
    return [rowMod, colMod]
}


function validPlacement(state, row, col){
    let mods = rotationMods(state)
    let rowMod = mods[0], colMod = mods[1]

    let board = state.board.slice()
    for(let i = 0; i < SHIP_SIZES[state.shipsSet]; i++){
        if(row+(i*rowMod) < 0 || row+(i*rowMod) > 9 || col+(i*colMod) < 0 || col+(i*colMod) > 9)
            return false
        let newRow = board[row+(i*rowMod)].slice()
        if(newRow[col+(i*colMod)].y !== "") 
            return false
    }
    return true
}

function placeShip(state, row, col){
    let mods = rotationMods(state)
    let rowMod = mods[0], colMod = mods[1]

    let board = state.board.slice()

    for(let i = 0; i < SHIP_SIZES[state.shipsSet]; i++){
        let newRow = board[row+(i*rowMod)].slice()
        newRow[col+(i*colMod)] = {
            y:`Ship${state.shipsSet+1}_${i+1}`,
            z:state.rotation
        }
        board[row+(i*rowMod)] = newRow
    }

    let ships = state.shipsSet+1
    return {
        ...state,
        board:board,
        shipsSet:ships,
        shipsleft:state.shipsLeft+1,
        cursor:state.cursor+1
        
    }
}

function attack(state, row, col){
    let target = state.enemyBoard.slice()
    let targetRow = target[row].slice()
    console.log("inside attack", targetRow[col].y[4])
    //hit or miss = invalid move
    if(targetRow[col].y === "hit" || targetRow[col].y === "miss")
        return state
    //no type = miss
    if(targetRow[col].y === ""){
        return state
    }
    //otherwise it's a hit
    else{
        return state
    }

    
}

async function sendBoard(board, channel){
    await channel.sendEvent({
        type: "board",
        board:board
    })
};

async function sendAttack(coords, channel){
    await channel.sendEvent({
        type: "attack",
        coords:coords
    })
};

function reducers(state, action) {
    if( state === undefined )
        return state;

    if( action.type === 'RESTART' ) {
        return createInitialState(state.playerName)
    }

    if( action.type === 'SET' ) {
        return {
            ...state,
            playerName:action.myName,
            enemyName:action.enemyName,
            currPlayer:action.first
        }
    }

    if(action.type === "PLACE"){
        if(state.shipsSet >= 5)
            return state
        if(!validPlacement(state, action.row, action.col))
            return state
        return placeShip(state, action.row, action.col)
    }

    if( action.type === 'ROTATE' ) {
        if(state.rotation === 3)
            state.rotation = -1
        return {
            ...state,
            rotation:state.rotation+1
        }
    }

    if( action.type === 'START' ) {
        sendBoard(action.board, action.channel)
        return {
            ...state,
            mode:"battle"
        }
    }

    if( action.type === 'SET_eBOARD' ) {
        return {
            ...state,
            enemyReady:true,
            enemyBoard:action.board
        }
    }

    if( action.type === 'ATTACK' ) {
        return attack(state, action.row, action.col)
    }
}

export {
    reducers,
    createInitialState,
}