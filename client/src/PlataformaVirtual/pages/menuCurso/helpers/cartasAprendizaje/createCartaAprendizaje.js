

import axios from "axios";


export const createCartaAprendizaje = (idGrupo, cedula, pregunta, respuesta, onOpenAlertSuccess, onOpenAlertError) => {
    axios.post('http://localhost:3300/cartasAprendizaje', {
        idGrupo,
        cedula,
        pregunta,
        respuesta
    }).then(() => {
        onOpenAlertSuccess();
    }, () => {
        onOpenAlertError();
    }).catch((error) => {
        console.log(error);
        onOpenAlertError();
    })
}