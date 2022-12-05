
const reset = () => {
    return {
        type: 'START'
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

export {
    reset,
    place_ship,
    rotation
}