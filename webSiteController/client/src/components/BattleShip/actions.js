
const reset = () => {
    return {
        type: 'RESTARTS'
    }
}

const place_ship = (row, col) => {
    return {
        type: 'PLACE',
        row:row,
        col:col
    }
}

const rotation = () => {
    return {
        type: 'ROTATE',
    }
}

const start = (board, channel) => {
    return {
        type: 'START',
        board:board,
        channel:channel
    }
}

const set_name = (myName, enemyName, first) => {
    return {
        type: 'SET',
        myName:myName,
        enemyName:enemyName,
        first:first
    }
}

const set_enemy = (board) => {
    return {
        type: 'SET_eBOARD',
        board:board
    }
}

const attack = (row, col, channel) => {
    return {
        type: 'ATTACK',
        row:row,
        col:col,
        channel:channel
    }
}

const receive_attack = (board) => {
    return {
        type: 'HIT',
        board:board
    }
}

export {
    reset,
    place_ship,
    rotation,
    start,
    set_name,
    set_enemy,
    attack,
    receive_attack
}