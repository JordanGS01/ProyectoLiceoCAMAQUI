import { Box } from '@mui/material'
import React from 'react'
import './InformacionMenuInicial.css'

export const InformacionMenuInicial = () => {
    return (
        <Box sx={{ marginTop: '5vh' }}>
            <div>
                <h4 style={{ fontFamily: 'Arial', color: '#0B92DC' }}>¿Que es la plataforma virtual?</h4>
                <div className='InformacionMenuInicial-linea'></div>
            </div>

            <Box sx={{ background: '#D9D9D9' ,width:'80vh', color:'#0B92DC', padding:'2vh', borderRadius: '5px  '}}>
                <p style={{fontFamily:'Arial', fontSize:'14px'}}> Liceo CAMAQUI cuenta con un sistema en linea que brinda apoyo a los estudiantes en 
                    su proceso de aprendizaje, aquí puedes realizar actividades como:
                </p>
                <ul>
                    <li  style={{color:'#0B92DC',fontFamily:'Arial', fontSize:'12px'}}>Revisar tus cursos matriculados según tu grupo</li>
                    <li  style={{color:'#0B92DC',fontFamily:'Arial', fontSize:'12px'}}>Agregar, modificar o eliminar tareas pendientes</li>
                    <li  style={{color:'#0B92DC',fontFamily:'Arial', fontSize:'12px'}}>Unirte a una nueva clase</li>
                </ul>
            </Box>

        </Box>
    )
}
