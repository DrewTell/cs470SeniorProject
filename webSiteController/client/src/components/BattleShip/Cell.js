
import { Box, Stack } from "@mui/material"
import "./cells.css"
import { blue } from "@mui/material/colors"
import { place_ship } from "./actions"
import water from "./water.png"
import { Spritesheet } from "./Spritesheet"

export const Cell = (props) => {
    const {occupied, row, col, ship, rotation, dispatch} = props
    
    const empty = blue[50]
    const full = blue[500]
    const color = occupied ? full : empty

    let classes = `cell rotate${rotation}`

    console.log(classes)

    return (
        <Stack>
            <Box id={ship} className={classes} onClick={() => { dispatch(place_ship(row, col)) }} sx={{mr:-1,
                                                                                                    mb:-1,        
                                                                                                    width:60, 
                                                                                                    height:60, 
                                                                                                    background:"none",
                                                                                                    '&:hover': {
                                                                                                        backgroundColor:full
                                                                                                    }}}/>
            <Spritesheet className="water"
                         image={water} 
                         width={60} 
                         height={60} 
                         steps={20} 
                         fps={10} 
                         loop={true}/>
        </Stack>
        )
}
