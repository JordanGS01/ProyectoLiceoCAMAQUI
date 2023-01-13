

import axios from "axios";


export const getUserNotes = (idGrupo, cedula, setUserNotes) => {
    axios.get(`http://localhost:3300/apuntes/${idGrupo}/${cedula}`)
    .then((response) => {
        const { data } = response.data;
        setUserNotes(data);
    }, (error) => {
        console.log(error)
    })
}