

import axios from "axios";


export const deleteTodo = (id, setOpenAlertSuccessEliminar, setOpenAlertError) => {
    axios.delete(`http://localhost:3300/tareas/${id}`)
    .then((response) => {
        setOpenAlertSuccessEliminar(true);
    }, (error) => {
        setOpenAlertError(false);
    })
}