

import axios from "axios";


export const deleteNoticia = (id, setOpenAlertSuccess, setOpenAlertError) => {
    axios.delete(`http://localhost:3300/noticias/${id}`)
    .then((response) => {
        setOpenAlertSuccess(true);
    }, (error) => {
        setOpenAlertError(true);
    })
}