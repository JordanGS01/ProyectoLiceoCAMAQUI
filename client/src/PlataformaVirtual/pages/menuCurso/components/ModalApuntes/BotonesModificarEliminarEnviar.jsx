

import { useState } from "react"
import { IconButton } from "@mui/material"
import { AutoFixHigh, Delete, Send } from "@mui/icons-material"

import { modifyApunte, deleteNote } from '../../helpers'

import { Alert } from "../../../../../ui"


export const BotonesModificarEliminarEnviar = ({ activeModified, onModify, onDisableModify, apunte, handleChanged }) => {
    const [openAlertDelete, setOpenAlertDelete] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

    const handleCloseAlertDelete = () => setOpenAlertDelete(false);
    const handleOpenAlertDelete = () => setOpenAlertDelete(true);

    const handleCloseAlertError = () => setOpenAlertError(false);
    const handleOpenAlertError = () => setOpenAlertError(true);

    const onModifyNote = () => {
        const { cedula, contenido, idGrupo, idNote } = apunte;
        modifyApunte(idNote, idGrupo, cedula, contenido, handleChanged, handleOpenAlertError);
        onDisableModify();
    }

    const onDeleteNote = () => {
        const { idNote } = apunte;
        deleteNote(idNote, handleChanged, handleOpenAlertError);
        setOpenAlertDelete(false);
    }


    return (
    <>
        {activeModified ?
        <>
            <IconButton 
                type="button" 
                sx={{ 
                    p: '10px',
                    bgcolor: '#74d447',
                    borderRadius: '0px',
                    color: 'white',
                    ':hover': {
                        bgcolor: '#4AD447'
                    }
                }} 
                aria-label="Modificar"

                onClick={onModify}
            >
                <AutoFixHigh />
            </IconButton>

            <IconButton
                color="primary" 
                sx={{
                    p: '10px',
                    bgcolor: '#dd4c4c',
                    borderRadius:'0px 5px 5px 0px',
                    color: 'white',
                    ':hover': {
                        bgcolor: '#F63030'
                    }
                }} 
                aria-label="Eliminar"

                onClick={handleOpenAlertDelete}
            >
                <Delete />
            </IconButton>
        </>
        :<></>}
        
        {!activeModified?
            <IconButton
                color="primary" 
                sx={{
                    p: '10px',
                    bgcolor: '#4FA4D3',
                    borderRadius:'0px 5px 5px 0px',
                    color: 'white',
                    ':hover': {
                        bgcolor: '#0B92DC'
                    }
                }} 
                aria-label="Enviar"

                onClick={onModifyNote}
            >
                <Send />
            </IconButton>
        :<></>}

        <Alert 
            open = { openAlertDelete }
            handleClose = {handleCloseAlertDelete}
            title = "Eliminar apunte"
            content = "¿Está seguro de que desea eliminar el apunte?"
            
            acceptButtonText = "Sí"
            acceptButtonFunction = {onDeleteNote}

            closeButtonText = "No"
            closeButtonFunction={handleCloseAlertDelete}
            
            oneButton = { false }
        />

        <Alert 
            open = { openAlertError }
            handleClose = {handleCloseAlertError}
            title = "Ha ocurrido un problema"
            content = "Ha ocurrido un problema mientras se intentaba hacer el cambio, por favor, inténtelo de nuevo"
            
            acceptButtonText = "Aceptar"
            acceptButtonFunction = {handleCloseAlertError}
            oneButton = { true }
        />

    </>
    )
}
