import React, { useRef, useEffect } from 'react'
import elfIdle from "./sprites/elf/Idle.png"
const Spritesheet = props => {
    const {image, width, height, steps, fps, loop} = props;
  
    const canvasRef = useRef(null)
  
    const draw = (ctx, loopIndex) => {
        console.log("index", loopIndex)
        let img = new Image()
        img.src = image
        ctx.drawImage(img, 100*loopIndex, 0, 100, 100, 0, 0, width, height)
    }
  
    useEffect(() => {
    
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0
        let loopIndex = 0
        let animationFrameId
        //Our draw came here
        const render = () => {
            frameCount++
            if(frameCount < 15){
                animationFrameId = window.requestAnimationFrame(render)
                return
            }
            frameCount = 0
            context.clearRect(0, 0, canvas.width, canvas.height)
            draw(context, loopIndex)
            loopIndex++
            if(loopIndex >= steps)
                loopIndex = 0
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        return () => {
        window.cancelAnimationFrame(animationFrameId)
        }
  }, [draw])
  
  return <canvas className="sprite" ref={canvasRef} {...props}/>
}

export{
 Spritesheet
}