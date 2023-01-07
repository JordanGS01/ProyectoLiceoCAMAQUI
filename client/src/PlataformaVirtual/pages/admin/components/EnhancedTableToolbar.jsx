

import { useState } from 'react';

import PropTypes from 'prop-types';

import { Toolbar, Typography, Tooltip,
         IconButton } from '@mui/material'
import { Delete, PersonAddAlt } from '@mui/icons-material'
import { alpha } from '@mui/material/styles';

import { ModalAddProfesor } from './ModalAddProfessor';
import { Alert } from '../../../../ui/components/Alert'


export const EnhancedTableToolbar = ({ numSelected, onDeleteUsers }) => {
    const [openAlert, setOpenAlert] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
      <>

      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Usuarios registrados
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Eliminar">
            <IconButton onClick={ () => { setOpenAlert(true) } }>
              <Delete />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Añadir profesor">
            <IconButton onClick={ () => { setOpenModal(true) } }>
              <PersonAddAlt />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>


      <Alert 
            open = { openAlert }
            handleClose = {() => { setOpenAlert(false) }}
            title = "¿Está seguro de esta acción?"
            content = "Todos los usuarios eliminados no podrán volver a ser recuperados ¿Desea continuar?"
            acceptButtonText = "Sí"
            acceptButtonFunction = {() => {onDeleteUsers(); setOpenAlert(false)} }
            closeButtonText = "No"
            closeButtonFunction = {() => { setOpenAlert(false) }}
            oneButton = { false }
        />

      <ModalAddProfesor
        open = {openModal}
        onCloseModal = { () => { setOpenModal(false) } }
      />

      </>
    );
}

EnhancedTableToolbar.propTypes = {
numSelected: PropTypes.number.isRequired,
};