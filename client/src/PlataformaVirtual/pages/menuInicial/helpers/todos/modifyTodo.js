

import axios from "axios";


export const modifyTodo = ( cedula, id, titulo, contenido, setOpenAlertSuccessModify, setOpenAlertError ) => {
    axios.put('http://localhost:3300/tareas',{
        cedula, 
        id, 
        titulo, 
        contenido
    }).then((response) => {
        setOpenAlertSuccessModify(true);
    }, (error) => {
        setOpenAlertError(true);
    })
}