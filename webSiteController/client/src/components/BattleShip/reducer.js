let SHIP_SIZES = [2,3,3,4,5]

function createInitialState() {
    let board = Array(10).fill(Array(10).fill({ isOccupied: false, hit:false, type:"", rotate:0}));
    return {
        mode: 'plan',
        board:board,
        shipsSet:0,
        haveWinner:false,
        rotation:0
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
        let newRow = board[row+(i*rowMod)].slice()
        if(newRow[col+(i*colMod)].isOccupied === true) 
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
            isOccupied: true, 
            hit:false, 
            type:`Ship${state.shipsSet+1}_${i+1}`,
            rotate:state.rotation
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

function reducers(state, action) {
    if( state === undefined )
        return state;

    if( action.type === 'START' ) {
        return createInitialState()
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
}

export {
    reducers,
    createInitialState,
}