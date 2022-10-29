
const click_on_cell_action = (clickColIdx, clickRowIdx, timeToRotate) => {
    return {
        type: "CELL_CLICKED",
        colIdx: clickColIdx,
        rowGroup: clickRowIdx,
        timeToRotate: timeToRotate,
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
