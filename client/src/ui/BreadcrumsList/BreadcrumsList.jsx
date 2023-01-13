import { Box } from '@mui/material'
import React from 'react'

import './BreadcrumsList.css'
import { Modal } from '@mui/material';

import { useNavigate } from 'react-router-dom';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export const BreadcrumsList = ({id, rutas, open, handleClose }) => {


    const navigate = useNavigate();

    for (let index = 0; index < rutas.length; index++) {
        if (rutas[index] == undefined) {
            rutas.pop(rutas[index])
        }
    }

    function elegir(dir) {
        if (dir == 'Menú Principal') {
            navigate('/menuInicial')
        } else {
            if (dir == 'Documentos') {
                navigate(`#`)
            } else {
                navigate(`/menuCurso/${id}/${dir}`)
            }

        }
    }

    return (
        <>
            <Modal sx={{ marginTop: '15vh', marginLeft: '30vh' }} open={open} onClose={handleClose} >
                <Box sx={{ background: '#D9D9D9', width: '20vh', border: 'solid', borderColor: '#0B92DC', borderRadius: '5PX' }}>
                    {rutas.map((dir) => (
                        <Box onClick={() => elegir(dir)} sx={{ padding: '2vh', color: '#0B92DC', height: '1vh' }}>
                            <ArrowForwardIosIcon sx={{ height: '10px', width: '10px' }} /> {dir}
                        </Box>
                    ))}
                </Box>
            </Modal>


        </>

    )
}
