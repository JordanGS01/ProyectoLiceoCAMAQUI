

import axios from "axios";


export const addStudentToGroup = (id, cedula, setOpenAlertSuccess, setOpenAlertError) => {
    axios.post('http://localhost:3300/agregarAlGrupo', {
        id,
        cedula
    }).then((response) => {
        const { status } = response.data;
        if (status !== "Fail") {
            setOpenAlertSuccess(true);
        } else {
            setOpenAlertError(true);    
        }
    }, (error) => {
        setOpenAlertError(true);
    })
}