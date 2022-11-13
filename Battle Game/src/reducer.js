
import { randomizer } from "./Components/randomizer";
function createInitialState() {
    // The board is a 2D array of Objects. Each Object holds the state of the "cell" that it represents.
    // Each of the elements of firstAvailableIndex contains an index for each column of the 2D array.
    // The value at the index specifies which row in that column a disk can be deposited.

    let units = Array(3).fill({name: "unitName", lvl:0, strength:0, defense:0, currHP: 0, maxHP: 0});
    let enemyUnit = randomizer(1,0)
    return {
        mode: 'start',
        units:units,
        members:0,
        stage:0,
        gold:0,
        currFighter:units[0],
        currFighterSlot:-1,
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
    };
}

function checkCurr(currFighter){
    let newFighter = {name: "unitName", lvl:0, strength:0, defense:0, currHP: 0, maxHP: 0}
    if(currFighter.currHP <= 0){
        return {
            newFighter
        }
    }
    return currFighter
}

function checkEnemy(enemy){
    let newEnemy = {name: "unitName", lvl:0, strength:0, defense:0, currHP: 0, maxHP: 0}
    if(enemy.currHP <= 0){
        console.log("enemy has died")
        return {
            newEnemy
        }
    }
    return enemy
}

function attack(state){
    let currFighter = state.currFighter
    let enemy = state.enemy
    let d1 = currFighter.strength - enemy.defense
    let d2 = enemy.strength - currFighter.defense

    enemy.currHP -= d1
    if(enemy.currHP !== 0)
        currFighter.HP -= d2

    currFighter = checkCurr(currFighter)
    enemy = checkEnemy(enemy)
    return {
        ...state,
        currFighter:currFighter,
        enemy:enemy
    }

}

function defend(state){
    if(state.enemy.name === "unitName")
        return state
    let currFighter = state.currFighter
    let enemy = state.enemy
    let d1 = enemy.strength - (Math.floor(currFighter.defense * 1.5) + 1)

    currFighter.currHP -= d1

    currFighter = checkCurr(currFighter)
    enemy = checkEnemy(enemy)
    return {
        ...state,
        currFighter:currFighter,
        enemy:enemy
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

    if(action.type === "ATTACK"){
        return attack(state)
    }

    if(action.type === "DEFEND"){
        return defend(state)
    }

    if( action.type === "SHOP") {
        return {
            ...state,
            mode:'shop'
        }
    }

    if(action.type === "SET_F"){
        console.log(action)
        return {
            ...state,
            currFighter:state.units[action.num]
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