import React from 'react'
import elfIdle from "./sprites/elf/Idle.png"
import elfAt from "./sprites/elf/Attack.png"
import elfDef from "./sprites/elf/Idle.png"
import humanIdle from "./sprites/human/Idle.png"
import humanAt from "./sprites/human/Attack.png"
import humanDef from "./sprites/human/Defend.png"
import hobbitIdle from "./sprites/hobbit/Idle.png"
import hobbitAt from "./sprites/hobbit/Idle.png"
import hobbitDef from "./sprites/hobbit/Idle.png"
import demonIdle from "./sprites/demon/Idle.png"
import demonAt from "./sprites/demon/Attack.png"
import demonDef from "./sprites/demon/Defend.png"
import skeleIdle from "./sprites/Skeleton/Idle.png"
import goblinIdle from "./sprites/Goblin/Idle.png"
import goblinDef from "./sprites/Goblin/Defend.png"
import mushroomIdle from "./sprites/Mushroom/Idle.png"
import eyeIdle from "./sprites/Flyingeye/Idle.png"
import wizardIdle from "./sprites/EvilWizard/Idle.png"
import {Spritesheet} from "./Spritesheet.js"

export const Unit = props => {
    const { name, anim} = props 
    let image, steps, loop, fps

    switch(name){
        case "Elf":
            switch(anim){
                case "Idle":
                    image = elfIdle
                    steps = 10 
                    loop = true
                    fps=12
                    break
                case "Attack":
                    image = elfAt
                    steps = 6
                    loop = true
                    fps=12
                    break
                case "Defend":
                    image = elfDef
                    steps = 3
                    loop = false
                    fps=8
                    break
                default:
                    break
            }
        break
        case "Human":
            switch(anim){
                case "Idle":
                    image = humanIdle
                    steps = 15
                    fps=10
                    loop = true
                    break
                case "Attack":
                    image = humanAt
                    steps = 8
                    loop = true
                    fps=8
                    break
                case "Defend":
                    image = humanDef
                    steps = 7
                    loop = false
                    fps=12
                    break
                default:
                    break
            }
        break
        case "Demon":
            switch(anim){
                case "Idle":
                    image = demonIdle
                    steps = 9
                    fps=12
                    loop = true
                    break
                case "Attack":
                    image = demonAt
                    steps = 8
                    fps=8
                    loop = true
                    break
                case "Defend":
                    image = demonDef
                    steps = 3
                    fps=12
                    loop = true
                    break
                default:
                    break
                
            }
        break
        case "Hobbit":
            switch(anim){
                case "Idle":
                    image = hobbitIdle
                    steps = 4
                    fps=10
                    loop = true
                    break
                case "Attack":
                    break

                case "Defend":
                    break
                default:
                    break
                
            }
        break
        case "Skeleton":
            switch(anim){
                case "Idle":
                    image = skeleIdle
                    steps = 4
                    fps=12
                    loop = true
                    break
                case "Attack":
                    break

                case "Defend":
                    break
                default:
                    break
                
            }
        break
        case "Goblin":
            switch(anim){
                case "Idle":
                    image = goblinIdle
                    steps = 4
                    fps=12
                    loop = true
                    break
                case "Attack":
                    break

                case "Defend":
                    image = goblinDef
                    steps = 4
                    fps = 12
                    loop = true
                    break
                default:
                    break
            }
        break
        case "Eye Bat":
            switch(anim){
                case "Idle":
                    image = eyeIdle
                    steps = 8
                    fps=12
                    loop = true
                    break
                case "Attack":
                    break

                case "Defend":
                    break
                default:
                    break
            }
        break
        case "Mushroom":
            switch(anim){
                case "Idle":
                    image = mushroomIdle
                    steps = 4
                    fps=12
                    loop = true
                    break
                case "Attack":
                    break

                case "Defend":
                    break
                default:
                    break
            }
        break
    default:
        break
    }
    return (
        <Spritesheet
            image={image}
            width={100}
            height={100}
            steps={steps}
            fps={fps}
            loop={loop}
        />
    )
}