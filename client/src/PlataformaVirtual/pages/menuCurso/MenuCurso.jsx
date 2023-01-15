

import { useEffect, useContext } from "react"

import { NavBar, Breadcrums } from "../../../ui";

import { useParams, useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { Herramientas, Grupo } from './components';
import { Noticias } from './components/Noticias/Noticias';

import { UserContext } from "../../context/UserContext"

import './MenuCurso.css'


export const MenuCurso = () => {
  const navigate = useNavigate();

  const { isStudent, isProfessor, isAdmin, logOutUser, userData, loged } = useContext(UserContext);
  const { id, nombre} = useParams()

  //Para los breadcrums
  const lista = []
  lista.push('Menú Principal')

  useEffect(() => {
    if (!loged) {
      navigate('/login')
    } else if (isAdmin()) {
      navigate('/admin')
    }
  }, [loged])


  return (
    <>
      <NavBar
        nombreUsuario={userData.nombre}
        onLogOut={logOutUser}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '80%' }}>
          <Breadcrums ruta={lista} />
          <Box sx={{ background: '', display: 'flex', flexDirection: 'row' }}>
            <Grupo />

            {(isStudent() && <Herramientas id={id} nameCurso={nombre} />)}

            {(
              isProfessor() && 
              <Box sx={{ }}>
                <Box sx={{marginLeft:'30vh', display:'flex', flexDirection:'column', justifyContent:'center', color:'#0B92DC'}}>
                  <h2>Codigo de ingreso al curso</h2>
                  <h2 style={{marginLeft:'10vh', color:'green'}}>{id}</h2>
                </Box>
                <Herramientas id={id} nameCurso={nombre} />
              </Box>
            )}
          </Box>

          <Noticias />


        </Box>
      </Box>
    </>
  )
}
