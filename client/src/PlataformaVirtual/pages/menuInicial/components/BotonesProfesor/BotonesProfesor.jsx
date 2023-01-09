
import './BotonesProfesor.css'

import React from 'react'
import { Box } from '@mui/system'
import Button from '@mui/material/Button'


export const BotonesProfesor = () => {
  return (
    <Box className='botones'>
        <Button  sx={{background: ' rgb(7, 86, 114)', color:'white',marginRight:'1vh','&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }}}>
          Crear
        </Button>
        <Button sx={{background: ' rgb(7, 86, 114)', color:'white', marginRight:'1vh', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }}}>
          Eliminar
        </Button>
    </Box>
  )
}
