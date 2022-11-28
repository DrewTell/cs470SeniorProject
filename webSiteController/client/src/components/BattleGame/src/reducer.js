
import { randomizer } from "./Components/randomizer";

let blankUnit = {name: "unitName", lvl:0, strength:0, defense:0, currHP: 0, maxHP: 0}

function createInitialState() {
    let units = Array(3).fill({name: "unitName", lvl:0, strength:0, defense:0, currHP: 0, maxHP: 0});
    return {
        mode: 'start',
        units:units,
        members:0,
        stage:1,
        enemies:1,
        gold:300,
        currFighter:units[0],
        currFighterSlot:-1,
        enemy:randomizer(1, 0, true),
        fightText:[],
        stageMap:"battle1"

    };
}

function addMember(state, unit, cost){
    if(state.gold < cost)
        return state
    let units = state.units
    let members = state.members
    if(members < 3){
        for(let i = 0; i < 3; i++){
            if(units[i].name === "unitName"){
                units[i] = unit
                members += 1
                i = 3
            }
        }
    }
    return {
        ...state,
        gold:state.gold-cost,
        units:units,
        members:members
    };
}

function addItem(state, item, cost){
    let units = state.units
    switch(item.name){
        case 'Steel Armor':
            for (let i of units){
                if(i.name === 'Human'){
                    i.defense += 2
                }
            }
            break
        case 'Oak Slingshots':
            for (let i of units){
                if(i.name === 'Hobbit'){
                    i.strength += 1
                }
            }
            break
         case 'Vambraces':
            for (let i of units){
                if(i.name === 'Hobbit'){
                       i.defense += 1 
                }
            }
            break
        case 'Poison Arrows':
            for (let i of units){
                if(i.name === 'Elf'){
                    i.strength += 2
                }
            }
            break
        case 'Combat Training':
            for (let i of units){
                if(i.name === 'Human'){
                    i.accuracy += 10
                }
            }
            break
        case 'Magic Sight':
            for (let i of units){
                if(i.name === 'Elf'){
                    i.accuracy += 5
                }
            }
            break
        case 'Healing Potion':
            for (let i of units){
                i.currHP = i.maxHP
            }
    }

    return {
        ...state,
        gold:state.gold-cost,
        units:units
    }
}

function advanceEnemy(state){
    let enemy = randomizer(state.stage, 0, true)

    let percent = (Math.random() * .50) + .90
    let loot = Math.floor(state.enemy.lvl * 50 * percent)

    if(state.enemies === 5)
        return advanceStage({...state,
                            gold:state.gold+loot})
    return {
        ...state,
        enemies:state.enemies+1,
        enemy:enemy,
        fightText:["Stage advanced, next battle commencing"],
        currFighter:blankUnit,
        gold:state.gold+loot
    }
}

function advanceStage(state){
    let enemy = randomizer(state.stage+1, 0, true)
    let old = "battle" + state.stage
    let next = "battle" + (state.stage+1)
    document.getElementById(old).id = next; 
    return {
        ...state,
        mode:"shop",
        enemies:1,
        stage:state.stage+1,
        enemy:enemy,
        fightText:["Stage advanced, next battle commencing"],
        currFighter:blankUnit
    }
}

function fighterDeath(state){
    if(state.members === 1)
        return createInitialState()
    state.units[state.currFighterSlot] = blankUnit
    return {
        ...state,
        currFighter:blankUnit,
        members:state.members-1
    }
}

function attack(state){
    state.fightText.push(`**********************************************************`)
    let currFighter = state.currFighter
    if(currFighter.name === "unitName")
        return state
    let enemy = state.enemy
    if(enemy.name === "unitName")
        return state
    let d1 = currFighter.strength - enemy.defense
    let d2 = enemy.strength - currFighter.defense
    if(d1 < 0)
        d1 = 0
    if(d2 < 0)
        d2 = 0
    state.fightText.push(`${currFighter.name} attacks!`)
    let chance = Math.round(Math.random() * 100)
    //unit attacks
    if(chance <= currFighter.accuracy){
        if(chance >= 95){
            d1 = Math.round(d1*1.5)
            enemy.currHP -= d1
            state.fightText.push(`* CRIT *`)
            state.fightText.push(`Enemy ${state.enemy.name} takes ${d1} damage!`)
        }
        enemy.currHP -= d1
        state.fightText.push(`Enemy ${state.enemy.name} takes ${d1} damage!`)
    }
    //unit misses
    else{
        state.fightText.push(`${state.currFighter.name} misses!`)
    }
    if(enemy.currHP > 0){
        state.fightText.push(`Enemy ${enemy.name} attacks!`)
        chance = Math.round(Math.random() * 100)
        //enemy attack
        if(chance <= state.enemy.accuracy){
            currFighter.currHP -= d2
            state.fightText.push(`${state.currFighter.name} takes ${d2} damage!`)
        }
        //enemy misses
        else{
            state.fightText.push(`${state.enemy.name} misses!`)
        }
    }
    if (currFighter.currHP <= 0){
        return state = fighterDeath(state)
    }
    if(enemy.currHP <= 0){
        currFighter.kills += 1
        if(currFighter.kills >= currFighter.lvl + 2)
            currFighter = levelUp(currFighter)
        return state = advanceEnemy(state)
    }
    else return {
        ...state,
        currFighter:currFighter,
        enemy:enemy,
        fightText:state.fightText
    }

}

function levelUp(fighter){
    //Could put a switch case on fighter.name to implement race specific growth rates
    fighter.lvl += 1
    let str = Math.round(Math.random() * 1.6)
    let def = Math.round(Math.random() * 0.60)
    if(str + def === 0)
        str = 1
    fighter.strength += str
    fighter.defense += def
    fighter.accuracy += 1
    fighter.maxHP += Math.round(Math.random() * 5)
    fighter.kills = 0
    return fighter
}

function defend(state){
    state.fightText.push(`**********************************************************`)  
    let currFighter = state.currFighter
    if(currFighter.name === "unitName")
        return state
    let enemy = state.enemy
    if(enemy.name === "unitName")
        return state
    state.fightText.push(`${currFighter.name} defends!`)
    let d1 = enemy.strength - (Math.floor(currFighter.defense * 1.5) + 1)
    state.fightText.push(`Enemy ${enemy.name} attacks!`)
    if(d1 < 0){
        enemy.currHP += d1
        state.fightText.push(`${enemy.name} breaks themself upon ${state.currFighter.name}'s body for ${d1} damage!`)
    }else{
        currFighter.currHP -= d1
        state.fightText.push(`${state.currFighter.name} takes ${d1} damage!`)
    }

    if (currFighter.currHP <= 0){
        return state = fighterDeath(state)
    }
    if(enemy.currHP <= 0){
        currFighter.kills += 1
        if(currFighter.kills >= currFighter.lvl + 2)
            currFighter = levelUp(currFighter)
        return state = advanceEnemy(state)
    }
    return {
        ...state,
        currFighter:currFighter,
        enemy:enemy,
        fightText:state.fightText
    }
}

function setFighter(state, action){
    let log = []
    log.push(`${state.units[action.num].name} has joined the battle`)
    log.push(`Enemy ${state.enemy.name} has joined the battle`)
    log.push(`Begin!`)
    return {
        ...state,
        currFighter:state.units[action.num],
        currFighterSlot:action.num,
        fightText:log
    }
}

function log(){
    let element = document.getElementById("log");
    element.scrollTop = element.scrollHeight - element.clientHeight;
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
        return setFighter(state, action)
    }

    if(action.type === "PURCHASE"){
        return addMember(state, action.unit, action.cost)
    }

    if(action.type === "ITEM"){
        return addItem(state, action.item, action.cost)
    }

    if(action.type === "LOG"){
        return log()
    }
}

export {
    reducers,
    createInitialState,
}