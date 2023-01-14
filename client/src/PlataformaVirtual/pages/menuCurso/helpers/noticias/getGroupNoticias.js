

import axios from 'axios'


export const getGroupNoticias = (idGrupo, setNoticias) => {
    axios.get(`http://localhost:3300/noticias/${idGrupo}`)
    .then( (response) => {
        const {data} = response.data;
        setNoticias(data);
    }, (error) => {
        console.log(error)
    })
}