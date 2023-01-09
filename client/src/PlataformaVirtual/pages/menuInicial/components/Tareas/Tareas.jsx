import React from 'react'

import { Box } from '@mui/system'

import { Tarea } from '../Tarea/Tarea'

import Button from '@mui/material/Button'

export const Tareas = () => {


    const Tareas = []

    Tareas.push('HACER LA COCINA')
    Tareas.push('HACER LA COCINA')
    Tareas.push('HACER LA COCINA')


 


    return (
        <Box sx={{ height: '70vh', background: '#D9D9D9', width: '60vh', marginTop: '15vh', borderRadius: '5px', marginLeft: '20vh'}}>
            <div style={{ background: 'red', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#4FA4D3', display: 'flex', flexDirection: 'row' }}>
                <h2 style={{ fontFamily: 'Arial', color: 'white', paddingLeft: '2vh' }}>Tareas</h2>
                <Box sx={{display:'flex', alignItems:'center', marginLeft:'auto'}}>
                    <Button sx={{marginRight: '2vh', background: ' rgb(7, 86, 114)', color: 'white', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }}}>Agregar</Button>
                </Box>
            </div>
            <Box sx={{overflowY: 'auto', height: '60vh'}}>
                {Tareas.map((tarea) => (
                    <Tarea nombre={tarea} />
                ))}
            </Box>


        </Box>
    )
}
