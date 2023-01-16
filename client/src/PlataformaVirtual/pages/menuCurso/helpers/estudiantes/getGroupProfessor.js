

import axios from "axios";


export const getGroupProfessor = (id, setProfessors) => {
    axios.get(`http://localhost:3300/groupProfessor/${id}`)
    .then((response) => {
        const { data } = response.data;
        setProfessors(data);
    }, (error) => {
        console.log(error);
    })
}