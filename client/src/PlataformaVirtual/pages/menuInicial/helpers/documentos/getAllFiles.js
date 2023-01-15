

import axios from "axios";

export const getAllFiles = (idCurso) => {
    axios.get(`http://localhost:3300/documentos/${idCurso}`)
    .then((response) => {
        consol.log(response.data)
    }, (error) => {
        console.log(error)
    })
}