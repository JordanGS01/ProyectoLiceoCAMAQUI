

import axios from "axios";


export const deleteFromGroup = (id, cedula, onChange, setOpenAlertSuccess, setOpenAlertError) => {
    axios.delete(`http://localhost:3300/eliminarDeGrupo/${id}/${cedula}`)
    .then((response) => {
        const { status } = response.data;
        
        if( status !== "Fail" ) {
            setOpenAlertSuccess(true);
            onChange();
        } else {
            setOpenAlertError(true);
        }
    }, (error) => {
        setOpenAlertError(true);
    })
}