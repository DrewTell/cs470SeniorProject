import React, { useRef } from 'react'
import elfIdle from "./sprites/elf/Idle.png"
import elfAt from "./sprites/elf/Idle.png"
import elfDef from "./sprites/elf/Idle.png"
import humanIdle from "./sprites/human/Idle.png"
import humanAt from "./sprites/human/Idle.png"
import humanDef from "./sprites/human/Idle.png"
import hobbitIdle from "./sprites/hobbit/Idle.png"
import hobbitAt from "./sprites/hobbit/Idle.png"
import hobbitDef from "./sprites/hobbit/Idle.png"
import demonIdle from "./sprites/demon/Idle.png"
import demonAt from "./sprites/demon/Idle.png"
import demonDef from "./sprites/demon/Idle.png"
import {Spritesheet} from "./Spritesheet.js"

export const Unit = props => {
    const {dispatch, name, anim} = props 
    const canvasRef = useRef(null)
    let image, width, height, steps, loop, fps

    switch(name){
        case "Elf":
            switch(anim){
                case "Idle":
                    image = elfIdle
                    width = 100
                    height = 100
                    steps = 10 
                    loop = true
                    fps=12
                    break
                case "Attack":
                    image = elfAt
                    width = 100
                    height = 100
                    steps = 6
                    loop = false
                    fps=12
                    break
                case "Defend":
                    image = elfDef
                    width = 100
                    height = 100
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
                    width = 100
                    height = 100
                    steps = 15
                    fps=12
                    loop = true
                    break
                case "Attack":
                    image = humanAt
                    width = 144
                    height = 64
                    steps = 22
                    loop = true
                    fps=12
                    break
                case "Defend":
                    image = humanDef
                    width = 96
                    height = 64
                    steps = 7
                    loop = true
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
                    width = 100
                    height = 100
                    steps = 9
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
        case "Hobbit":
            switch(anim){
                case "Idle":
                    image = hobbitIdle
                    width = 100
                    height = 100
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
    default:
        break
    }
    return (
        <Spritesheet
            image={image}
            width={width}
            height={height}
            steps={steps}
            fps={fps}
            loop={loop}
        />
    )
}