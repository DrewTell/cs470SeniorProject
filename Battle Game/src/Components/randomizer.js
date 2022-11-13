export const randomizer = (level, range) => {

    let names = ['Human', 'Dwarf', 'Elf', 'Demon']
    let idx = Math.floor(Math.random() * 4)
    let name = names[idx]

    let lRange = Math.floor(Math.random()*range)
    lRange *= Math.round(Math.random()) ? 1 : -1

    let lvl = level + lRange

    let strength = Math.floor(Math.random() * 9) + 1
    let defense = Math.floor(Math.random() * 5)
    let HP = Math.floor(Math.random() * lvl) + Math.floor(lvl / 2)
    return {
        name: name, 
        lvl:lvl, 
        strength:strength, 
        defense:defense, 
        currHP: HP,
        maxHP: HP
    }
}