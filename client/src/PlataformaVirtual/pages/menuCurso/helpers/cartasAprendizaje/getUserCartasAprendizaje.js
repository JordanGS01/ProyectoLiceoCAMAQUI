

import axios from "axios";


export const getUserCartasAprendizaje = (idGrupo, cedula, setCartas) => {
    axios.get(`http://localhost:3300/cartasAprendizaje/${idGrupo}/${cedula}`)
    .then((response) => {
        const { data } = response.data;
        setCartas(data);
    }, (rejected) => {
        console.log(rejected);
    }).catch((error) => {
        console.log(error);
    })
}