

import axios from "axios";


export const addTodo = (cedula, formState, setOpenAlertSuccess, setOpenAlertError) => {
    const { contenido, tituloF: titulo } = formState;
    
    axios.post('http://localhost:3300/tareas',{
        cedula,
        titulo,
        contenido
    }).then((response) => {
        setOpenAlertSuccess(true);
    }, (error) => {
        setOpenAlertError(true);
    })
}