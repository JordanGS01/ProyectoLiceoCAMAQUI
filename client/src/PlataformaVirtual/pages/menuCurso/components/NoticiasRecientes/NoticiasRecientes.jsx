

import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";

import { UserContext } from "../../../../context/UserContext"

import { Box } from '@mui/material';

import { NoticiaProfesor } from "../NoticiaProfesor/NoticiaProfesor"

import { getGroupNoticias } from '../../helpers'



export const NoticiasRecientes = ({ changed, handleChanged }) => {
    const { id } = useParams();

    
    const [noticias, setNoticias] = useState([]);

    const { isStudent, isProfessor } = useContext(UserContext);


    useEffect(() => {
        getGroupNoticias(id, setNoticias);
    }, [changed]);
    
    { (!noticias || noticias === undefined) && <></> }

    return (
        <>

            {(isStudent() && 
                <Box sx={{ height: '40vh', overflow: 'auto' }}>
                    {noticias.map(({id, titulo, contenido, id_grupo}) => (
                        <Box 
                            key={id}
                            sx={{ background: '#BAC8D0', color: '#0B92DC', marginTop: '1vh', padding: '10px', borderRadius: '5px' }}
                        >
                            {titulo}
                        </Box>
                    ))}
                </Box>
            )}

            {(isProfessor() && 
                <Box sx={{ height: '40vh', overflow: 'auto' }}>
                    {noticias.map( ({id, titulo, contenido, id_grupo}) => (
                        <NoticiaProfesor
                            key = {id}
                            id = {id}
                            titulo = {titulo}
                            contenido = {contenido}
                            idGrupo = {id_grupo}
                            onChanged = {handleChanged}
                        />
                    ))}
                </Box>
            )}
        </>

    )
}
