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

const add_member = (unit) => {
    return {
        type: 'PURCHASE',
        unit:unit
    }
}

export {
    shop_mode,
    battle_mode,
    set_fighter,
    attack,
    defend,
    add_member
}