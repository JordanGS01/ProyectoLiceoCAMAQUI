

import axios from "axios";


export const deleteGroup = (id, onChangedGroups) => {
    axios.delete(`http://localhost:3300/grupo/${id}`)
    .then((response) => {
        onChangedGroups();
    }, (error) => {
        console.log(error)
    })
}