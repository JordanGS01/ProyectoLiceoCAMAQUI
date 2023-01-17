

import axios from "axios";


export const deleteCartaAprendizaje = (id, handleOpenAlertSuccessModifyDelete, handleOpenAlertError) => {
    axios.delete(`http://localhost:3300/cartasAprendizaje/${id}`)
    .then((response) => {
        handleOpenAlertSuccessModifyDelete();
    }, (rejected) => {
        handleOpenAlertError();
    }).catch((error) => {
        handleOpenAlertError();
    })
}