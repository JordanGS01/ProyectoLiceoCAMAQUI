

import { useState } from 'react'

import { Box } from '@mui/material'

import { ModalVisualizacion, Alert } from '../../../../../ui'

import { stylesBoxContenedor } from './ClasesSxTarea'
import './Tarea.css'

import { deleteTodo, modifyTodo } from '../../helpers'

export const Tarea = ({ id, cedula, contenido, titulo, onChanged }) => {
    const [openModal, setOpenModal] = useState(false);
    const [openAlertEliminar, setOpenAlertEliminar] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

    const onOpenModal = () => setOpenModal(true);
    const onCloseModal = () => setOpenModal(false);
    
    const handleCloseAlertEliminar = () => setOpenAlertEliminar(false);
    const handleCloseAlertSuccessEliminar = () => setOpenAlertSuccess(false);
    const handleCloseAlertError = () => setOpenAlertError(false);

    const handleDeletedOrModifySuccessfully = () => {
        setOpenAlertSuccess(false);
        setOpenAlertEliminar(false);
        setOpenModal(false);
        onChanged(true);
    }

    const onDeleteTodo = () => {
        deleteTodo(id, setOpenAlertSuccess, setOpenAlertError);
    }
    
    const onModifyTodo = (formState) => {
        const { id, contenido, tituloF: titulo } = formState;
        
        modifyTodo(cedula, id, titulo, contenido, setOpenAlertSuccess, setOpenAlertError);
    }


    return (
        <>
        <Box onClick={onOpenModal} sx={stylesBoxContenedor}>
            <p className="Tarea-Titulo">
                {titulo}
            </p>
        </Box>

        <ModalVisualizacion 
            open={openModal}
            handleClose={ onCloseModal }

            idObj={id}
            tituloObj={titulo}
            contenidoObj={contenido}

            titulo={ "Mi tarea" }
            botonesActivos={{
                eliminar: true,
                modificar: true,
                enviar: false
            }}
            funcionesBotones={{
                onEliminar: () => {setOpenAlertEliminar(true)}
            }}
            onSubmitForm={onModifyTodo}
        />

        {/* Alert para confirmar la eliminación de un TODO */}
        <Alert 
            open = { openAlertEliminar }
            handleClose = {handleCloseAlertEliminar}
            title = "Eliminar"
            content = "¿Está seguro que desea eliminar esta tarea?"
            
            acceptButtonText = "Sí"
            acceptButtonFunction = {onDeleteTodo}
            
            closeButtonText = "No"
            closeButtonFunction = {handleCloseAlertEliminar}
            
            oneButton = { false }
        />
        {/* Alert en caso de éxito en la eliminación de un TODO*/}
        <Alert 
            open = { openAlertSuccess }
            handleClose = {handleCloseAlertSuccessEliminar}
            title = {`${openAlertEliminar? "Eliminada" : "Modificada"} correctamente`}
            content = {`La tarea ha sido ${openAlertEliminar?"eliminada":"modifiada"} correctamente`}
            
            acceptButtonText = "Cerrar"
            acceptButtonFunction = {handleDeletedOrModifySuccessfully}
            
            oneButton = { true }
        />

        {/* Alert en caso de que ocurra un error*/}
        <Alert 
            open = { openAlertError }
            handleClose = {handleCloseAlertError}
            title = "Error"
            content = "Se ha producido un error, por favor, inténtelo de nuevo"
            
            acceptButtonText = "Cerrar"
            acceptButtonFunction = {handleCloseAlertError}
            
            oneButton = { true }
        />

        </>
    )
}
