
import { Box, Stack } from "@mui/material"
import "./cells.css"
import { blue, red } from "@mui/material/colors"
import { place_ship, attack } from "./actions"
import water from "./water.png"
import { Spritesheet } from "./Spritesheet"

export const Cell = (props) => {
    const {row, col, ship, rotation, dispatch, hover} = props
    
    let color = ""

    let classes = `cell rotate${rotation}`

    return (
        <Stack>
            {hover === "target" ? <Box id={ship} className={classes} onClick={() => { dispatch(attack(row, col)) }} sx={{mr:-1,
                                                                                                    mb:-1,        
                                                                                                    width:60, 
                                                                                                    height:60, 
                                                                                                    background:"none",
                                                                                                    '&:hover': {
                                                                                                        backgroundColor:red[500]
                                                                                                    }}}/> 
                          :
                            <Box id={ship} className={classes} onClick={() => { dispatch(place_ship(row, col)) }} sx={{mr:-1,
                                                                                                                mb:-1,        
                                                                                                                width:60, 
                                                                                                                height:60, 
                                                                                                                background:"none",
                                                                                                                '&:hover': {
                                                                                                                    backgroundColor:blue[500]
                                                                                                                }}}/>
            }
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
