
function createInitialState() {
    // The board is a 2D array of Objects. Each Object holds the state of the "cell" that it represents.
    // Each of the elements of firstAvailableIndex contains an index for each column of the 2D array.
    // The value at the index specifies which row in that column a disk can be deposited.

    let units = Array(3).fill({name: "unitName", lvl:0, strength:0, defense:0, HP: 0});

    return {
        mode: 'start',
        units,
        members:0

    };
}

function addMember(state, unit){
    let units = state.units
    let members = state.members
    if(members < 3){
        units[members] = unit
        members += 1
    }
    return {
        ...state,
        units:units,
        members:members
    }
}

function reducers(state, action) {
    if( state === undefined )
        return state;

    if( action.type === 'START' ) {
        state =  createInitialState()
        return state
    }

    if(action.type === "PURCHASE"){
        console.log("inside purchase action")
        return addMember(state, action.unit)
    }
    if( action.type === "SHOP") {
        return {
            ...state,
            mode:'shop'
        }
    }
}

export {
    reducers,
    createInitialState,
}