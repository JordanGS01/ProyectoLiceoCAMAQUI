

import { useState } from 'react';

import { Box, Button, Typography, IconButton } from '@mui/material';
import { Delete, AutoFixHigh } from "@mui/icons-material"

import { modifyCartaAprendizaje, deleteCartaAprendizaje } from "../../helpers"

import { verRespuesta, ocultarRespuesta } from './ClasesScCartasAprendizaje'

import { Alert, ModalVisualizacion } from "../../../../../ui"


export const CartasAprendizaje = ({ nameCurso, cedula, id, idGrupo, pregunta, respuesta, onChanged }) => {

  const [volteada, setVolteada] = useState(false);

  const [openModalModify, setOpenModalModify] = useState(false);
  const [openAlertSuccessModifyDelete, setOpenAlertSuccessModifyDelete] = useState(false);
  const [openAlertDelete, setOpenAlertDelete] = useState(false);
  const [openAlertError, setOpenAlertError] = useState(false);

  const handleCloseModalModify = () => setOpenModalModify(false);
  const handleOpenModalModify = () => setOpenModalModify(true);

  const handleCloseAlertSuccessModifyDelete = () => {
    setOpenAlertDelete(false);
    setOpenModalModify(false);
    onChanged();
    setOpenAlertSuccessModifyDelete(false); 
  }
  const handleOpenAlertSuccessModifyDelete = () => setOpenAlertSuccessModifyDelete(true);

  const handleCloseAlertDelete = () => setOpenAlertDelete(false);
  const handleOpenAlertDelete = () => setOpenAlertDelete(true);

  const handleCloseAlertError = () => setOpenAlertError(false);
  const handleOpenAlertError = () => setOpenAlertError(true);

  const changeVolteada = () => setVolteada(!volteada)

  const onModifyCard = (formState) => {
      const { tituloF:nuevaPregunta, contenido:nuevaRespuesta } = formState;
      modifyCartaAprendizaje(id, idGrupo, cedula, nuevaPregunta, nuevaRespuesta, handleOpenAlertSuccessModifyDelete, handleOpenAlertError);
  }

  const onDeleteCard = () => {
      deleteCartaAprendizaje(id, handleOpenAlertSuccessModifyDelete, handleOpenAlertError);
  }


  return (
    <>
      <Box sx={{ width: '40vh', height: '45vh', background: '#D9D9D9', borderRadius: '5px' }}>
        <Box sx={{ width: '100%', height: '5vh', background: '#4fa5d3b0', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', display: 'flex', alignItems: 'center' }}>
          <Typography marginLeft={1} fontSize={17} color="white">{nameCurso}</Typography>
          <Box sx={{ marginLeft: 'auto' }}>
            
            <IconButton
              onClick={handleOpenAlertDelete}
            >
              <Delete sx={{ background: '', marginRight: '1vh', color: ' rgb(7, 86, 114)' }} />
            </IconButton>

            <IconButton
              onClick={handleOpenModalModify}
            >
              <AutoFixHigh sx={{ background: '', marginRight: '1vh', color: ' rgb(7, 86, 114)' }} />
            </IconButton>

          </Box>
        </Box>
        <Box sx={{ height: '82%', overflowY: 'auto', margin: '15px' }}>
          <Box >
            {pregunta} 
          </Box>
          <Button onClick={changeVolteada} sx={{ color:'#4FA4D3','&:hover': { backgroundColor: '' }}} >
            {!volteada? "Ver respuesta": "Ocultar respuesta"}
          </Button>
          <Box>
            <Typography ml={2} mr={2} mb={2} sx={volteada ? verRespuesta : ocultarRespuesta}>
              <p style={{ fontFamily: 'Arial', fontSize: '13px' }}>{respuesta}</p>
            </Typography>
          </Box>

        </Box>
      </Box>

      <ModalVisualizacion 
          open={openModalModify}
          handleClose={ handleCloseModalModify }

          titulo={ "Nueva tarjeta de aprendizaje" }
          labelTitulo="Pregunta"
          labelDescripcion="Respuesta"

          tituloObj={pregunta}
          contenidoObj={respuesta}

          botonesActivos={{
              eliminar: false,
              modificar: true,
              enviar: false
          }}
          funcionesBotones={{
              onEliminar: () => {},
              onModificar: () => {},
          }}
          onSubmitForm={onModifyCard}
      />

      {/* Alert en caso de éxito al eliminar o modificar*/}
      <Alert 
          open = { openAlertSuccessModifyDelete }
          handleClose = { handleCloseAlertSuccessModifyDelete }
          title = "Exito"
          content = "Todo se ha realizado correctamente"
          acceptButtonText = "Cerrar"
          acceptButtonFunction = { handleCloseAlertSuccessModifyDelete }
          oneButton = { true }
      />

      {/* Alert en caso para verificar el eliminar de una carta*/}
      <Alert 
          open = { openAlertDelete }
          handleClose = { handleCloseAlertDelete }
          title = "Eliminar la carta de aprendizaje"
          content = "¿Está seguro de que desea eliminar esta carta?"
          
          acceptButtonText = "Sí"
          acceptButtonFunction = { onDeleteCard }

          closeButtonText = "No"
          closeButtonFunction = { handleCloseAlertDelete }

          oneButton = { false }
      />

      {/* Alert en caso de error*/}
      <Alert 
          open = { openAlertError }
          handleClose = { handleCloseAlertError }
          title = "Ha ocurrido un problema"
          content = "Por favor inténtelo de nuevo"
          acceptButtonText = "Cerrar"
          acceptButtonFunction = { handleCloseAlertError }
          oneButton = { true }
      />

    </>
  )
}
