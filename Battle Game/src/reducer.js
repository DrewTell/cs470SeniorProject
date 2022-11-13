
import { randomizer } from "./Components/randomizer";
function createInitialState() {
    // The board is a 2D array of Objects. Each Object holds the state of the "cell" that it represents.
    // Each of the elements of firstAvailableIndex contains an index for each column of the 2D array.
    // The value at the index specifies which row in that column a disk can be deposited.

    let units = Array(3).fill({name: "unitName", lvl:0, strength:0, defense:0, currHP: 0, maxHP: 0});
    let enemyUnit = randomizer()
    return {
        mode: 'start',
        units:units,
        members:0,
        stage:0,
        gold:0,
        currFighter:units[0],
        enemy:enemyUnit

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
        return createInitialState()
    }

    if(action.type === "BATTLE"){
        return {
            ...state,
            mode:'battle'
        }
    }

    if( action.type === "SHOP") {
        return {
            ...state,
            mode:'shop'
        }
    }

    if(action.type === "PURCHASE"){
        return addMember(state, action.unit)
    }
}

export {
    reducers,
    createInitialState,
}