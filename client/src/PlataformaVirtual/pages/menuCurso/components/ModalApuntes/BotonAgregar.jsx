

import { useState } from 'react'
import { Button } from '@mui/material'

import { ModalSingleInput, Alert } from '../../../../../ui'

import { addApunte } from '../../helpers'

export const BotonAgregar = ({ idGrupo, cedula, onChanged }) => {
    const [openModalCreate, setOpenModalCreate] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

    const handleCloseModalCreate = () => setOpenModalCreate(false);
    const handleOpenModalCreate = () => setOpenModalCreate(true);

    const handleCloseAlertSuccess = () => setOpenAlertSuccess(false);
    const handleOpenAlertSuccess = () => setOpenAlertSuccess(true);

    const handleCloseAlertError = () => setOpenAlertError(false);
    const handleOpenAlertError = () => setOpenAlertError(true);

    const onSubmitForm = (formState, onFormReset) => {
        const { tituloF: contenido } = formState;

        addApunte(idGrupo, cedula, contenido, handleOpenAlertSuccess, handleOpenAlertError, onChanged);
        onFormReset();
        setOpenModalCreate(false);
    }


    return (
        <>
        <Button
            onClick={handleOpenModalCreate}
        >
            Agregar
        </Button>

        <ModalSingleInput
            titulo="Apunte"
            tituloInput="Apunte"
            tituloObj=""
            open={openModalCreate}
            onClose={handleCloseModalCreate}
            onSubmitForm={(onSubmitForm)}
        />

        {/* Alert en caso de éxito*/}
        <Alert 
            open = { openAlertSuccess }
            handleClose = { handleCloseAlertSuccess }
            title = "¡Creado correctamente!"
            content = "Se ha creado el apunte exitosamente"
            acceptButtonText = "Cerrar"
            acceptButtonFunction = { handleCloseAlertSuccess }
            oneButton = { true }
        />

        {/* Alert en caso de que ocurra algún error*/}
        <Alert 
            open = { openAlertError }
            handleClose = { handleCloseAlertError }
            title = "Error"
            content = "Ha ocurrido un error al crear el apunte"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { handleCloseAlertError }
            oneButton = { true }
        />
        </>
    )
}
