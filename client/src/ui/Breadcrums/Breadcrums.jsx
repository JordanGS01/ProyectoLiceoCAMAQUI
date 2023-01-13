import { Box, Button } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Breadcrums.css'

import { BreadcrumsList } from '../BreadcrumsList/BreadcrumsList';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Breadcrums = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { id,nombre } = useParams()

    console.log(id, nombre)

    const lista = []

    if (props.ruta[0] == 'M') {
        lista.push('Menú Principal')
    } else {
        for (let index = 0; index < props.ruta.length; index++) {
            lista.push(props.ruta[index])
        }
    }

    return (
        <Box sx={{ height: '5vh', background: '', marginTop: '15vh', marginBottom: '1vh' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button onClick={handleOpen} sx={{ '&:hover': { backgroundColor: 'white' }, borderRadius: '20px' }}>
                    <MoreHorizIcon sx={{ color: '#0B92DC' }} />
                </Button>
                {props.ruta == 'Menú Principal' ? <h7 style={{ color: '#0B92DC' }}>{props.ruta}</h7> : props.direccion=='Documentos' ? <h7 style={{ color: '#0B92DC' }}>Documentos</h7>:
                    <h7 style={{ color: '#0B92DC' }}>{nombre}</h7>}
            </Box>
            <div class='breadcrums-linea'></div>
            <BreadcrumsList  id ={id} rutas={lista} open={open} handleClose={handleClose} />
        </Box>
    )
}
