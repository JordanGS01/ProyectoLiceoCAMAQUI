

import { useState, useContext, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

import { NavBar, Breadcrums } from "../../../ui";

import { Box } from '@mui/material';

import { ModalApuntes } from './components/ModalApuntes/ModalApuntes'


export const MenuCurso = () => {
  const { getUserData } = useContext(UserContext);

  const [openModalApuntes, setOpenModalApuntes] = useState(false);
  const [cedulaUsuario, setCedulaUsuario] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();
  
  const lista = []

  lista.push('Menú Principal')
  lista.push(id)

  const handleCloseModalApuntes = () => setOpenModalApuntes(false);
  const handleOpenModalApuntes = () => setOpenModalApuntes(true);

  useEffect(() => {
    const { cedula } = getUserData();
    setCedulaUsuario(cedula);
  }, [])
  


  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={{background:'', width:'78%'}}>
          <Breadcrums ruta={lista}/>
          <button onClick={()=>navigate(-1)}>Volver</button>
          <button onClick={handleOpenModalApuntes}>Apuntes</button>
        </Box>
      </Box>

      <ModalApuntes
        open={openModalApuntes}
        handleClose={handleCloseModalApuntes}
        cedula={cedulaUsuario}
        idGrupo={id}
      />
    </>
  )
}
