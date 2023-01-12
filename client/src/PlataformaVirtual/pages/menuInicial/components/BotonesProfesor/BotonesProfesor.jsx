

import { useState, useContext } from 'react'

import { UserContext } from '../../../../context/UserContext'

import { Button, Box } from '@mui/material'

import { ModalSingleInput } from '../../../../../ui/components/ModalSingleInput/ModalSingleInput'

import './BotonesProfesor.css'

import { createGroup } from '../../helpers'


export const BotonesProfesor = ({ handleChanged }) => {
  const { getUserData } = useContext(UserContext);
  
  const [openModalAddGroup, setOpenModalAddGroup] = useState(false);

  const handleOpenModalAddGroup = () => setOpenModalAddGroup(true);
  const handleCloseModalAddGroup = () => setOpenModalAddGroup(false);

  const onSubmitForm = (formState, onFormReset) => {
    const { tituloF: titulo } = formState;
    const { cedula } = getUserData();
    
    createGroup(cedula,titulo,handleChanged);
    onFormReset();
    setOpenModalAddGroup(false);
  }


  return (
    <>
    <Box className='BotonesProfesores-Botones'>
        <Button 
          sx={{
            background: ' rgb(7, 86, 114)',
            color:'white',marginRight:'1vh',
            '&:hover': {
              backgroundColor: ' rgba(6, 82, 110, 0.696)'
            }
          }}
          onClick={handleOpenModalAddGroup}
        >
          Crear
        </Button>
    </Box>
    
    <ModalSingleInput
      titulo="Nombre del grupo"
      tituloInput="Nombre"
      tituloObj=""
      open={openModalAddGroup}
      onClose={handleCloseModalAddGroup}
      onSubmitForm={onSubmitForm}
    />


    </>
  )
}
