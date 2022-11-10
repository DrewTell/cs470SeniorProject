export const randomizer = () => {
    let names = ['Human', 'Dwarf', 'Elf', 'Demon']
    let idx = Math.floor(Math.random() * 4)

    let name = names[idx]
    let lvl = Math.floor(Math.random() * 100)
    let strength = Math.floor(Math.random() * 10)
    let defense = Math.floor(Math.random() * 10)
    let HP = Math.floor(Math.random() * 100)
    return {
        name: name, 
        lvl:lvl, 
        strength:strength, 
        defense:defense, 
        HP: HP
    }
}