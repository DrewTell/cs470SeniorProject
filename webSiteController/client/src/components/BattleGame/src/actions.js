const shop_mode = () => {
    return {
        type: 'SHOP',
    }
}

const battle_mode = () => {
    return {
        type: 'BATTLE',
    }
}

const set_fighter = (fighter) => {
    return {
        type: 'SET_F',
        num:fighter
    }
}

const attack = () => {
    return {
        type: 'ATTACK'
    }
}

const defend = () => {
    return {
        type: 'DEFEND'
    }
}

const add_member = (unit, cost) => {
    return {
        type: 'PURCHASE',
        unit:unit,
        cost:cost
    }
}

const add_item = (item, cost) => {
    return {
        type: 'ITEM',
        item:item,
        cost:cost
    }
}

const update_log = () => {
    return {
        type: 'LOG'
    }
}
export {
    shop_mode,
    battle_mode,
    set_fighter,
    attack,
    defend,
    add_member,
    add_item,
    update_log
}