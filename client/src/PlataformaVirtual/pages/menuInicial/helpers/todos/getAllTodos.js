

import axios from 'axios';

export const getAllTodos = async({ cedula }, setTodos) => {
    axios.get(`http://localhost:3300/tareas/${cedula}`)
    .then((response) => {
        const { data } = response.data;
        setTodos(data);

        return data;
    }, (error) => {
        console.log(error);
        return false;
    })
}