

import { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"

import { UserContext } from "../../../../context/UserContext"

import { Button } from "@mui/material"

import { Alert, ModalVisualizacion } from "../../../../../ui"

import { createCartaAprendizaje } from "../../helpers"


export const BotonCrear = ({ onChanged }) => {
    const { id } = useParams();
    const { getUserData } = useContext(UserContext);

    const [cedula, setCedula] = useState(false);

    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

    const handleCloseModalCreate = () => setOpenModalCreate(false);
    const handleOpenModalCreate = () => setOpenModalCreate(true);

    const handleCloseAlertSuccess = () => {
        setOpenAlertSuccess(false);
        onChanged();
    }
    const onOpenAlertSuccess = () => setOpenAlertSuccess(true);

    const handleCloseAlertError = () => setOpenAlertError(false);
    const onOpenAlertError = () => setOpenAlertError(true);

    const onSubmitForm = (formState, onFormReset) => {
        const { tituloF: pregunta, contenido: respuesta } = formState;
        
        createCartaAprendizaje(id, cedula, pregunta, respuesta, onOpenAlertSuccess, onOpenAlertError);
        onFormReset();
        setOpenModalCreate(false);
    }
    
    useEffect(() => {
        const { cedula: ced } = getUserData();
        setCedula(ced);
    }, [])
    

    {!cedula && <></>}
    return (
        <>
            <Button
                onClick={handleOpenModalCreate}
                sx={{ background: ' rgb(7, 86, 114)', color: 'white', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }}}
            >
                Agregar
            </Button>

            <ModalVisualizacion 
                open={openModalCreate}
                handleClose={ handleCloseModalCreate }

                titulo={ "Nueva tarjeta de aprendizaje" }
                labelTitulo="Pregunta"
                labelDescripcion="Respuesta"
                botonesActivos={{
                    eliminar: false,
                    modificar: false,
                    enviar: true
                }}
                funcionesBotones={{
                    onEliminar: () => {},
                    onModificar: () => {},
                }}
                onSubmitForm={onSubmitForm}
            />

            {/* Alert en caso de éxito*/}
            <Alert 
                open = { openAlertSuccess }
                handleClose = { handleCloseAlertSuccess }
                title = "¡Creada correctamente!"
                content = "Se ha creado la carta exitosamente"
                acceptButtonText = "Cerrar"
                acceptButtonFunction = { handleCloseAlertSuccess }
                oneButton = { true }
            />

            {/* Alert en caso de que ocurra algún error*/}
            <Alert 
                open = { openAlertError }
                handleClose = { handleCloseAlertError }
                title = "Error"
                content = "Ha ocurrido un error al crear la carta de aprendizaje"
                acceptButtonText = "Aceptar"
                acceptButtonFunction = { handleCloseAlertError }
                oneButton = { true }
            />
        </>
    )
}
