
const click_on_cell_action = (clickColIdx, clickRowIdx, timeToRotate, turn, player, client, channel) => {
    console.log("Cell clicked by: ", turn, player);
    console.log("this is channel in click", channel)
    if (turn === player) {

        return {
            type: "CELL_CLICKED",
            colIdx: clickColIdx,
            rowGroup: clickRowIdx,
            timeToRotate: timeToRotate,
            client: client,
            channel: channel,
            player: player,
        }
    }
    return {
        type: "DO_NOTHING",
    }
}

const reset_action = () => {
    return {
        type: 'RESET',
    }
}

const skip_rotation = () => {
    return {
        type: 'SKIP_ROTATION',
    }
}

const button_clicked = (buttonQuadrant, timeToRotate) => {
    return {
        type: 'BUTTON_CLICKED',
        quadrant: buttonQuadrant,
        timeToRotate: timeToRotate
    }
}
const rotation_clicked = (buttonQuadrant, timeToRotate, direction) => {
    return {
        type: 'ROTATION_CLICKED',
        quadrant: buttonQuadrant,
        timeToRotate: timeToRotate,
        direction: direction
    }
}



export {
    click_on_cell_action,
    reset_action,
    button_clicked,
    rotation_clicked,
    skip_rotation
};
