

import axios from "axios";


export const addApunte = (idGrupo, cedula, contenido, handleOpenAlertSuccess, handleOpenAlertError, onChanged) => {
    axios.post('http://localhost:3300/apuntes',{
        idGrupo,
        cedula,
        contenido
    }).then((response) => {
        const { status } = response.data;
        if (status !== 'Fail') {
            handleOpenAlertSuccess();
            onChanged();
        } else {
            handleOpenAlertError();
        }
    }, (error) => {
        handleOpenAlertError();
    })
}