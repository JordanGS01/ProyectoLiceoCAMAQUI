

import axios from 'axios'


export const getAllUserGroups = (ced, setCursos) => {
    axios.get(`http://localhost:3300/grupo/${ced}`)
    .then((response) => {
        const { data } = response.data;
        setCursos(data);
    }, (error) => {
        console.log(error)
    })
}