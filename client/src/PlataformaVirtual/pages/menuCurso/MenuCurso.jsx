

import { useState, useContext, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import { NavBar, Breadcrums } from "../../../ui";

import { Box } from '@mui/material';

import { ModalApuntes, ModalTarjetasAprendizaje } from './components'

import { Grupo, Herramientas, Noticias } from './components'


export const MenuCurso = () => {
  const { getUserData } = useContext(UserContext);

  const [openModalApuntes, setOpenModalApuntes] = useState(false);
  const [openModalTarjetas, setOpenModalTarjetas] = useState(false);
  const [cedulaUsuario, setCedulaUsuario] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();
  const { isStudent, isAdmin, logOutUser, userData, loged, isProfessor } = useContext(UserContext);

  //const { direccion } = useParams()

  const lista = []

  lista.push('Menú Principal')
  lista.push(id)

  const handleCloseModalApuntes = () => setOpenModalApuntes(false);
  const handleOpenModalApuntes = () => setOpenModalApuntes(true);

  const handleCloseModalTarjetas = () => setOpenModalTarjetas(false);
  const handleOpenModalTarjetas = () => setOpenModalTarjetas(true);

  useEffect(() => {
    const { cedula } = getUserData();
    setCedulaUsuario(cedula);
  }, [])
  

  const Codigo = 'E7GH45'


  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '80%' }}>
          <Breadcrums ruta={lista} />
          <Box sx={{ background: '', display: 'flex', flexDirection: 'row' }}>
            <Grupo />

            {(isStudent() && <Herramientas nameCurso={id} />)}

            {(isProfessor() && <Box sx={{ }}>
              <Box sx={{marginLeft:'30vh', display:'flex', flexDirection:'column', justifyContent:'center', color:'#0B92DC'}}>
                <h2>Codigo de ingreso al curso</h2>
                <h2 style={{marginLeft:'10vh', color:'green'}}>{Codigo}</h2>
              </Box>
              <Herramientas nameCurso={id} />
            </Box>)}

          </Box>
          <Noticias />
        </Box>
      </Box>

      <ModalApuntes
        open={openModalApuntes}
        handleClose={handleCloseModalApuntes}
        cedula={cedulaUsuario}
        idGrupo={id}
      />

      <ModalTarjetasAprendizaje
        open={openModalTarjetas}
        handleClose={handleCloseModalTarjetas}
        cedula={cedulaUsuario}
        idGrupo={id}
      />
    </>
  )
}
