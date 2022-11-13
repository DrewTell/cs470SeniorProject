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

const add_member = (unit) => {
    return {
        type: 'PURCHASE',
        unit:unit
    }
}

export {
    shop_mode,
    battle_mode,
    add_member
}