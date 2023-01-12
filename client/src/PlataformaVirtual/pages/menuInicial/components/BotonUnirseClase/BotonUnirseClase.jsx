

import { useState, useContext } from 'react'

import { UserContext } from '../../../../context/UserContext'

import { Box, Button } from '@mui/material'

import { ModalSingleInput, Alert } from '../../../../../ui'

import { stylesBoxButton, stylesButtonJoinGroup } from './ClasesSxBotonUnirseClase'

import { joinGroup } from '../../helpers'

export const BotonUnirseClase = ({ handleChanged }) => {
    const { getUserData } = useContext(UserContext);

    const [openModalJoinGroup, setOpenModalJoinGroup] = useState(false);
    const [openAlertDoesntExist, setOpenAlertDoesntExist] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);

    const handleOpenModalJoinGroup = () => setOpenModalJoinGroup(true);
    const handleCloseModalJoinGroup = () => setOpenModalJoinGroup(false);

    const handleCloseAlertDoesntExist = () => setOpenAlertDoesntExist(false);
    const handleOpenAlertDoesntExist = () => setOpenAlertDoesntExist(true);

    const handleCloseAlertSuccess = () => setOpenAlertSuccess(false);
    const handleOpenAlertSuccess = () => setOpenAlertSuccess(true);

    const onSubmitForm = (formState, onFormReset) => {
        const { tituloF: id } = formState;
        const { cedula } = getUserData();

        joinGroup(cedula, id, handleChanged, handleOpenAlertDoesntExist, handleOpenAlertSuccess);
        onFormReset();
        setOpenModalJoinGroup(false);
    }


    return (
        <>
        <Box sx={stylesBoxButton}>
            <Button 
                sx={stylesButtonJoinGroup}
                onClick={handleOpenModalJoinGroup}
            >
                Unirse a clase
            </Button>
        </Box>

        <ModalSingleInput
            titulo="Código del grupo"
            tituloInput="Código"
            tituloObj=""
            open={openModalJoinGroup}
            onClose={handleCloseModalJoinGroup}
            onSubmitForm={onSubmitForm}
        />

        {/* Alert en caso de que el código ingresado no corresponda a ningun grupo */}
        <Alert 
            open = { openAlertDoesntExist }
            handleClose = { handleCloseAlertDoesntExist }
            title = "No se ha podido unir al grupo"
            content = "No existe un grupo con el código ingresado o ya se encuentra registrado en el grupo"
            acceptButtonText = "Cerrar"
            acceptButtonFunction = { handleCloseAlertDoesntExist }
            oneButton = { true }
        />

        {/* Alert en caso de éxito al ingresar a un grupo */}
        <Alert 
            open = { openAlertSuccess }
            handleClose = { handleCloseAlertSuccess }
            title = "¡Éxito!"
            content = "Se ha registrado exitosamente en el grupo"
            acceptButtonText = "Cerrar"
            acceptButtonFunction = { handleCloseAlertSuccess }
            oneButton = { true }
        />
        </>
    )
}
