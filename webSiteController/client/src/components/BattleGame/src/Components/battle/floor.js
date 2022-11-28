import { useEffect, useRef } from "react";

export const Floor = (props) => {
    const {floor} = props
    const canvasRef = useRef(null)
    


    // Draw the ellipse
    useEffect(() => {
    
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);

        // Add three color stops
        gradient.addColorStop(0, "rgba(241,221,190,0.5)");
        gradient.addColorStop(0.5, "rgba(255,255,255,0.3)");
        gradient.addColorStop(0.9, "rgba(255,255,255,0.05)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.ellipse(100, 100, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
        ctx.strokeStyle = "rgba(255,255,255,0)"
        ctx.stroke();
        ctx.fill()
        
    }, [])

    return(
        <canvas className="floor" ref={canvasRef} {...props}/>
    )
}