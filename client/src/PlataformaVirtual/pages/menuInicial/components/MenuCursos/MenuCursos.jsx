
import React from 'react'

import { ListaCursos } from '../../../ListaCursos/ListaCursos'
import Box from '@mui/material/Box';

import { BotonesProfesor } from '../../../BotonesProfesor/BotonesProfesor';

import './MenuCursos.css'
import Button from '@mui/material/Button'

export const MenuCursos = ({tipo}) => {
    return (
        <Box className='Box-cursos'>
            <div style={{ background: 'red', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#4FA4D3', display: 'flex', flexDirection: 'row' }}>
                <h2 style={{ fontFamily: 'Arial', color: 'white', paddingLeft: '2vh' }}>Grupos</h2>
                {tipo == 'P' ? <BotonesProfesor /> :
                <Box sx={{display:'flex', alignItems:'center', marginLeft:'auto'}}>
                    <Button sx={{ background: ' rgb(7, 86, 114)', color: 'white', marginRight: '1vh', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' } }}>
                        Unirse a clase
                    </Button>
                </Box>
                }
            </div>
            <Box  sx={{marginLeft:'3vh',height:'30vh', overflowY: 'auto'}}>
                <ListaCursos />
            </Box>
        </Box>
    )
}
