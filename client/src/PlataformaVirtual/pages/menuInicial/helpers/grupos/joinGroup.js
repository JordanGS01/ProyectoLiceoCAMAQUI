

import axios from "axios";


export const joinGroup = (cedula, id, handleChanged, handleOpenAlertDoesntExist, handleOpenAlertSuccess) => {
    axios.post('http://localhost:3300/agregarAlGrupo',{
        id,
        cedula
    }).then( (response) => {
        const { status } = response.data;
        if ( status !== 'Fail' ) {
            handleChanged();
            handleOpenAlertSuccess();
        } else {
            handleOpenAlertDoesntExist();
        }
    }, (error) => {
        console.log(error);
    })
}