const shop_mode = () => {
    return {
        type: 'SHOP',
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
    add_member
}