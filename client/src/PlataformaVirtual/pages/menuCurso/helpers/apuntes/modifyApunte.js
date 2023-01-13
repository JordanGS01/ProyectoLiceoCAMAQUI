

import axios from "axios";


export const modifyApunte = ( idNote, idGrupo, cedula, contenido, handleChanged, handleOpenAlertError ) => {
    axios.put('http://localhost:3300/apuntes',{
        idNote,
        idGrupo,
        cedula,
        contenido
    }).then( (response) => {
        handleChanged();
    }, (error) => {
        handleOpenAlertError();
        console.log(error);
    })
}