

import { useContext, useState } from 'react'
import { UserContext } from '../../../../context/UserContext'


import { Box, Button } from '@mui/material'

import { ModalTarjetasAprendizaje } from '../ModalTarjetasAprendizaje/ModalTarjetasAprendizaje'

import './Herramientas.css'

import { ModalApuntes } from '../ModalApuntes/ModalApuntes'


export const Herramientas = ({ id, nameCurso, cedula }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openModalApuntes, setOpenModalApuntes] = useState(false);

  const onCloseModalApuntes = () => setOpenModalApuntes(false);
  const onOpenModalApuntes = () => setOpenModalApuntes(true);

  const { isStudent, isProfessor } = useContext(UserContext);

  return (
    <>
      {(isStudent() && <Box className='Box-herramientas'>
        <Box sx={{ background: '', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: 'white', fontFamily: 'Arial' }}>Herramientas</h2>
        </Box>
        <div style={{ background: ' rgb(7, 86, 114)', width: '100%', height: '2px' }}></div>

        <Box sx={{ marginLeft: '1vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '3vh' }} >
          <Button
            sx={{
              background: 'rgb(7, 86, 114)',
              color: 'white',
              marginRight: '1vh',
              '&:hover': {
                backgroundColor: 'rgba(6, 82, 110, 0.696)'
              },
              width: '90%',
              height: '10vh',
              marginLeft: '1vh'
              }}
              
              onClick={onOpenModalApuntes}
            >
              Apuntes
            </Button>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '3vh', justifyContent: 'center' }}>
          <Button 
            onClick={handleOpen}
            sx={{ background: 'rgb(7, 86, 114)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(6, 82, 110, 0.696)'
              },
              marginLeft: '1vh',
              width: '90%', 
              height: '10vh'
              }}
            >
              Cartas de aprendizaje
            </Button>
          <ModalTarjetasAprendizaje  nameCurso={nameCurso} open={open} handleClose={handleClose} />
        </Box>
      </Box>)}

      {(isProfessor() && 
      <Box className='Box-herramienta'>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ color: 'white', fontFamily: 'Arial' }}>Herramientas</h2>
        </Box>
        <div style={{ background: ' rgb(7, 86, 114)', width: '100%', height: '2px' }}></div>
        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '3vh' }}>
          <Button 
            sx={{ 
              background: 'rgb(7, 86, 114)',
              color: 'white',
              marginRight: '3vh',
              '&:hover':{ 
                backgroundColor:'rgba(6, 82, 110, 0.696)'
              },
              marginLeft: '3vh',
              width: '100%',
              height: '10vh' 
              }}

              onClick = { onOpenModalApuntes }
          >
                Apuntes
          </Button>
        </Box>
      </Box>
      )}


      <ModalApuntes
        open={openModalApuntes}
        handleClose={onCloseModalApuntes}
        cedula={cedula}
        idGrupo={id}
      />
    </>
  )
}
