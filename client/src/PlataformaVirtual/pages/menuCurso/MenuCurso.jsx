import React from 'react'

import { NavBar } from "../../../ui/components/NavBar/NavBar";

import { Breadcrums } from "../../../ui/Breadcrums/Breadcrums";

import { Box } from '@mui/material';

import { useParams, useNavigate } from 'react-router-dom';

import './MenuCurso.css'

import { Herramientas } from './components/Herramientas/Herramientas';

import { Grupo } from './components/Grupo/Grupo';


import { Noticias } from './components/Noticias/Noticias';

import { useContext } from "react"


import { UserContext } from "../../context/UserContext"



export const MenuCurso = () => {

  const navigate = useNavigate();

  const { isStudent, isAdmin, logOutUser, userData, loged, isProfessor } = useContext(UserContext);

  const { id, nombre} = useParams()

  const lista = []

  lista.push('Menú Principal')

  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '80%' }}>
          <Breadcrums ruta={lista} />
          <Box sx={{ background: '', display: 'flex', flexDirection: 'row' }}>
            <Grupo />

            {(isStudent() && <Herramientas id={id} nameCurso={nombre} />)}

            {(isProfessor() && <Box sx={{ }}>
              <Box sx={{marginLeft:'30vh', display:'flex', flexDirection:'column', justifyContent:'center', color:'#0B92DC'}}>
                <h2>Codigo de ingreso al curso</h2>
                <h2 style={{marginLeft:'10vh', color:'green'}}>{id}</h2>
              </Box>
              <Herramientas id={id} nameCurso={nombre} />
            </Box>)}
          </Box>

          <Noticias />


        </Box>
      </Box>
    </>
  )
}
