

import axios from "axios";


export const modifyNoticia = (idGrupo, idNoticia, titulo, contenido, setOpenAlertSuccess, setOpenAlertError) => {
    axios.put('http://localhost:3300/noticias', {
        idGrupo,
        idNoticia,
        titulo,
        contenido        
    }).then((response) => {
        setOpenAlertSuccess(true);
    }, (error) => {
        setOpenAlertError(true);
    })
}