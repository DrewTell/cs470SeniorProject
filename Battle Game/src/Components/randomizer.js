export const randomizer = (level, range, enemy) => {

    let names = ['Human', 'Hobbit', 'Elf']
    let enemyNames = ['Goblin','Mushroom', 'Skeleton', 'Eye Bat', 'Demon']
    let name
    if(!enemy){
        let idx = Math.floor(Math.random() * 3)
        name = names[idx]
    }
    else{
        let idx = Math.floor(Math.random() * 5)
        name = enemyNames[idx]
    }

    let lRange = Math.floor(Math.random()*(range+1))
    lRange *= Math.round(Math.random()) ? 1 : -1

    let lvl = level + lRange

    let strength = Math.floor(Math.random() * 3) + 1
    let defense = Math.floor(Math.random() * 1)
    let HP = Math.ceil(Math.random() * lvl) + Math.ceil(lvl / 3)
    return {
        name: name, 
        lvl:lvl, 
        strength:strength, 
        defense:defense, 
        currHP: HP,
        maxHP: HP,
        rarity:"normal",
        traits:[]
    }
}