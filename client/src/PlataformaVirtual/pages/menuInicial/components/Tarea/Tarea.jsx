import { Box } from '@mui/material'
import React from 'react'

import './Tarea.css'

export const Tarea = ({ nombre }) => {
    return (
        <Box sx={{ margin: '5vh', background: '#BAC8D0', height: '10vh', display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius:'5px'}}>
            <div style={{color:'rgb(11, 69, 120,0.751)', fontFamily:'Arial',  cursor:'pointer'}}>
                {nombre}
            </div>
        </Box>
    )
}
