import { Box, Button } from '@mui/material'
import React from 'react'

import './Herramientas.css'

import { useNavigate } from 'react-router-dom'

import { useContext } from 'react'


import { UserContext } from '../../../../context/UserContext'



export const Herramientas = (props) => {

  const navigate = useNavigate()

  const { isStudent, isAdmin, logOutUser, userData, loged, isProfessor } = useContext(UserContext);

  return (
    <>
      {(isStudent() && <Box className='Box-herramientas'>
        <Box sx={{ background: '', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: 'white', fontFamily: 'Arial' }}>Herramientas</h2>
        </Box>
        <div style={{ background: ' rgb(7, 86, 114)', width: '100%', height: '2px' }}></div>

        <Box sx={{ marginLeft: '1vh', background: '', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '3vh' }} >
          <Button onClick={() => navigate(`/documentos/${props.id}/${props.nameCurso}`)} sx={{ background: ' rgb(7, 86, 114)', color: 'white', marginRight: '1vh', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }, width: '26vh', height: '10vh' }} > Documentos</Button>
          <Button sx={{ background: ' rgb(7, 86, 114)', color: 'white', marginRight: '1vh', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }, width: '26vh', height: '10vh', marginLeft: '1vh' }} > Apuntes</Button>
        </Box>

        <Box sx={{ background: '', display: 'flex', flexDirection: 'row', marginTop: '3vh' }}>
          <Button sx={{ background: ' rgb(7, 86, 114)', color: 'white', marginRight: '3vh', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }, marginLeft: '3vh', width: '100%', height: '10vh' }} > Cartas de aprendizaje</Button>
        </Box>
      </Box>)}

      {(isProfessor() && <Box className='Box-herramienta'>
        <Box sx={{ background: '', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: 'white', fontFamily: 'Arial' }}>Herramientas</h2>
        </Box>
        <div style={{ background: ' rgb(7, 86, 114)', width: '100%', height: '2px' }}></div>
        <Box sx={{ background: '', display: 'flex', flexDirection: 'row', marginTop: '3vh' }}>
          <Button onClick={() => navigate(`/documentos/${props.id}/${props.nameCurso}`)}  sx={{ background: ' rgb(7, 86, 114)', color: 'white', marginRight: '3vh', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }, marginLeft: '3vh', width: '100%', height: '10vh' }} >Documentos</Button>
        </Box>
      </Box>)}
    </>
  )
}
