

import axios from "axios";


export const getGroupStudents = (id, setEstudiantes) => {
    axios.get(`http://localhost:3300/groupStudents/${id}`)
    .then((response) => {
        const { data } = response.data;
        setEstudiantes(data);
    }, (error) => {
        console.log(error);
    })
}