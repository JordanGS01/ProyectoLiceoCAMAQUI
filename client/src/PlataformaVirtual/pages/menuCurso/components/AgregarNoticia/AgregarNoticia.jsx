

import { useState } from "react"

import { Button } from "@mui/material"

import { ModalVisualizacion, Alert } from "../../../../../ui"

import { addNoticia } from '../../helpers'
import { useParams } from "react-router-dom"

export const AgregarNoticia = ({ onChange }) => {
    const [openModalAgregar, setOpenModalAgregar] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);
    
    const { id: idGrupo } = useParams();
    
    const handleCloseModalAgregar = () => setOpenModalAgregar(false);
    const handleOpenModalAgregar = () => setOpenModalAgregar(true);

    const handleCloseAlertSuccess = () => {
        setOpenAlertSuccess(false);
        setOpenModalAgregar(false);
        onChange(true);
    }
    const handleOpenAlertSuccess = () =>  setOpenAlertSuccess(true);

    const handleCloseAlertError = () => setOpenAlertError(false);
    const handleOpenAlertError = () => setOpenAlertError(true);

    const onAddNoticia = (formState, onResetForm) => {
        const { contenido, tituloF:titulo } = formState;
        
        addNoticia(idGrupo, titulo, contenido, handleOpenAlertSuccess, handleOpenAlertError);
        onResetForm();
    }


    return (
        <>
        <Button
            sx={{ 
                background: 'rgb(7, 86, 114)',
                color: 'white',
                '&:hover':{ 
                    backgroundColor:'rgba(6, 82, 110, 0.696)'
                },  
            }}

            onClick={ handleOpenModalAgregar }
        >
            Publicar
        </Button>

        <ModalVisualizacion 
            open={ openModalAgregar }
            handleClose={ handleCloseModalAgregar }

            titulo={ "Publicar noticia" }
            botonesActivos={{
                eliminar: false,
                modificar: false,
                enviar: true
            }}
            funcionesBotones={{
                onEliminar: () => {},
                onModificar: () => {},
            }}
            onSubmitForm={onAddNoticia}
        />

        <Alert 
            open = { openAlertSuccess }
            handleClose = { handleCloseAlertSuccess }
            title = "Noticia publicada"
            content = "Se ha publicado la noticia exitosamente"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { handleCloseAlertSuccess }

            oneButton = { true }
        />

        <Alert 
            open = { openAlertError }
            handleClose = { handleCloseAlertError }
            title = "Error"
            content = "Se ha producido un error al publicar la noticia, por favor, inténtelo de nuevo"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { handleCloseAlertError }

            oneButton = { true }
        />
        </>
    )
}
