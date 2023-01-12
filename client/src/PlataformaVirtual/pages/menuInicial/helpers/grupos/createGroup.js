


import axios from "axios";

import uniqid from 'uniqid';


export const createGroup = (cedulaProfesor,nombre, handleChanged) => {
    const id = uniqid.time('pp');
    axios.post('http://localhost:3300/grupo',{
        id,
        cedulaProfesor,
        nombre
    }).then( (response) => {
        handleChanged();
    }, (error) => {
        
    });
}