

import axios from "axios"


export const deleteUser = (ced) => {
    axios.delete(`http://localhost:3300/users/${ced}`)
    .then(() => {
        return true
    }, () => {
        return false;
    })
}