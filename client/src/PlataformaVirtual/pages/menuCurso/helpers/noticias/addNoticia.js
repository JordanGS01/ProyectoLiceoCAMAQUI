

import axios from 'axios'


export const addNoticia = (idGrupo, titulo, contenido, handleOpenAlertSuccess, handleOpenAlertError) => {
    axios.post('http://localhost:3300/noticias', {
        idGrupo,
        titulo,
        contenido
    }).then((response) => {
        handleOpenAlertSuccess();
    }, (error) => {
        handleOpenAlertError();
    })
}