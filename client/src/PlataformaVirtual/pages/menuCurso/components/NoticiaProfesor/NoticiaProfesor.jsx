

import { useState } from "react"

import { Box } from "@mui/material"

import { ModalVisualizacion, Alert } from "../../../../../ui"

import { modifyNoticia, deleteNoticia } from "../../helpers"


export const NoticiaProfesor = ({ id, titulo, contenido, idGrupo, onChanged }) => {
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

    const onDeleteNoticia = () => {
        deleteNoticia(id, setOpenAlertSuccess, setOpenAlertError);
    }
    
    const onModifyNoticia = (formState) => {
        const { id: idNoticia, tituloF: tituloNuevo, contenido: contenidoNuevo } = formState;
        
        modifyNoticia(idGrupo, idNoticia, tituloNuevo, contenidoNuevo, setOpenAlertSuccess, setOpenAlertError);
    }


    return (
        <>
        <Box 
            sx={{
                background: '#BAC8D0',
                color: '#0B92DC',
                marginTop: '1vh',
                padding: '10px',
                borderRadius: '5px',
                ':hover': {
                    cursor: 'pointer',
                    backgroundColor: '#A0B1BAC0'
                }
            }}

            onClick={onOpenModal}
        >
            {titulo}
        </Box>

        <ModalVisualizacion
            key={id}
            
            open={ openModal }
            handleClose={ onCloseModal }

            titulo={ "Modificar noticia" }
            idObj={id}
            tituloObj={titulo}
            contenidoObj={contenido}

            botonesActivos={{
                eliminar: true,
                modificar: true,
                enviar: false
            }}
            funcionesBotones={{
                onEliminar: () => {setOpenAlertEliminar(true)}
            }}
            onSubmitForm={onModifyNoticia}
        />

        {/* Alert para confirmar la eliminación de un TODO */}
        <Alert 
            open = { openAlertEliminar }
            handleClose = {handleCloseAlertEliminar}
            title = "Eliminar"
            content = "¿Está seguro que desea eliminar esta noticia?"
            
            acceptButtonText = "Sí"
            acceptButtonFunction = {onDeleteNoticia}
            
            closeButtonText = "No"
            closeButtonFunction = {handleCloseAlertEliminar}
            
            oneButton = { false }
        />

        {/* Alert en caso de éxito en la eliminación de un TODO*/}
        <Alert 
            open = { openAlertSuccess }
            handleClose = {handleCloseAlertSuccessEliminar}
            title = {`${openAlertEliminar? "Eliminada" : "Modificada"} correctamente`}
            content = {`La noticia ha sido ${openAlertEliminar?"eliminada":"modifiada"} correctamente`}
            
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



/*
export const NoticiaProfesor = ({ id, titulo, contenido, idGrupo, onChanged }) => {
    const [openModalModify, setOpenModalModify] = useState(false);
    const [openAlertSuccessModify, setopenAlertSuccessModify] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

    const handleCloseModalModify = () => setOpenModalModify(false);
    const handleOpenModalModify = () => setOpenModalModify(true);

    const handleCloseAlertModify = () => {
        setopenAlertSuccessModify(false);
        onChanged(true);
    }
    const handleOpenAlertModify = () => setopenAlertSuccessModify(true);

    const handleCloseAlertError = () => setOpenAlertError(false);
    const handleOpenAlertError = () => setOpenAlertError(true);

    const onModifyNoticia = (formState, onResetForm) => {
        const { contenido: contenidoNuevo, id: i, tituloF: tituloNuevo } = formState;
        
        modifyNoticia(idGrupo, i, tituloNuevo, contenidoNuevo, handleOpenAlertModify, handleOpenAlertError);
        onResetForm();
        setOpenModalModify(false);
    }


    return (
        <>
        <Paper
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '99.2%',
                marginTop: '1vh',
                borderRadius: '5px',
                backgroundColor: '#BAC8D0',
            }}
        >
            <InputBase
                disabled
                sx={{ ml: 1, flex: 1}}
                value={titulo}
                inputProps={{ 'aria-label': 'search google maps' }}
            />

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

                onClick={handleOpenModalModify}
            >
                <AutoFixHigh />
            </IconButton>

            <IconButton
                color="primary"
                sx={{
                    p: '10px',
                    bgcolor: '#dd4c4c',
                    borderRadius: '0px 5px 5px 0px',
                    color: 'white',
                    ':hover': {
                        bgcolor: '#F63030'
                    }
                }}
                aria-label="Eliminar"
            >
                <Delete />
            </IconButton>
        </Paper>

        <ModalVisualizacion
            key={id}
            
            open={ openModalModify }
            handleClose={ handleCloseModalModify }

            titulo={ "Modificar noticia" }
            idObj={id}
            tituloObj={titulo}
            contenidoObj={contenido}

            botonesActivos={{
                eliminar: false,
                modificar: true,
                enviar: false
            }}
            funcionesBotones={{
                onEliminar: () => {}
            }}
            onSubmitForm={onModifyNoticia}
        />

        <Alert 
            open = { openAlertSuccessModify }
            handleClose = { handleCloseAlertModify }
            title = "Modificada correctamente"
            content = "La noticia se ha modificado exitosamente"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { handleCloseAlertModify }

            oneButton = { true }
        />

        <Alert 
            open = { openAlertError }
            handleClose = { handleCloseAlertError }
            title = "Error"
            content = "Se ha producido un error al modificar la noticia, por favor, inténtelo de nuevo"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { handleCloseAlertError }

            oneButton = { true }
        />
        </>
    )
}
 */