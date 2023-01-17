

import axios from "axios";


export const modifyCartaAprendizaje = (idCard, idGrupo, cedula, pregunta, respuesta, handleOpenAlertSuccessModifyDelete, handleOpenAlertError) => {
    axios.put("http://localhost:3300/cartasAprendizaje", {
        idCard,
        idGrupo,
        cedula,
        pregunta,
        respuesta
    }).then((response) => {
        handleOpenAlertSuccessModifyDelete();
    }, (rejected) => {
        handleOpenAlertError();
    }).catch((error) => {
        handleOpenAlertError();
    })
}