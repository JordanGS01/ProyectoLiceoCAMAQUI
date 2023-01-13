

import axios from "axios";


export const deleteNote = (id, handleChanged, handleOpenAlertError) => {
    axios.delete(`http://localhost:3300/apuntes/${id}`)
    .then(() => {
        handleChanged();
    }, (error) => {
        handleOpenAlertError();
    })
}