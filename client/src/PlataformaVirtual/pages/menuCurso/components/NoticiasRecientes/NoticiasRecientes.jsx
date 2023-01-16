

import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";

import { UserContext } from "../../../../context/UserContext"

import { Box } from '@mui/material';

import { NoticiaProfesor } from "../NoticiaProfesor/NoticiaProfesor"

import { Alert } from '../../../../../ui'

import { getGroupNoticias } from '../../helpers'



export const NoticiasRecientes = ({ changed, handleChanged }) => {
    const { id } = useParams();

    
    const [noticias, setNoticias] = useState([]);
    const [openAlertVerNoticia, setOpenAlertVerNoticia] = useState(false);
    const [noticiaSeleccionada, setNoticiaSeleccionada] = useState({});

    const { isStudent, isProfessor } = useContext(UserContext);

    const onClickedNoticia = (titulo, contenido) => {
        setNoticiaSeleccionada({
            titulo,
            contenido
        })
        setOpenAlertVerNoticia(true);
    }

    const onCloseAlertVerNoticia = () => setOpenAlertVerNoticia(false);

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
                            sx={{
                                background: '#BAC8D0',
                                color: '#0B92DC',
                                marginTop: '1vh',
                                padding: '10px',
                                borderRadius: '5px',
                                ':hover': {
                                    cursor: 'pointer',
                                    backgroundColor: '#A0B1BAC0'
                                }
                            }}
                            onClick = {() => { onClickedNoticia(titulo, contenido) }}
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

        <Alert 
            open = { openAlertVerNoticia }
            handleClose = { onCloseAlertVerNoticia }
            title = {noticiaSeleccionada.titulo}
            content = {noticiaSeleccionada.contenido}
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { onCloseAlertVerNoticia }

            oneButton = { true }
        />
        </>

    )
}
