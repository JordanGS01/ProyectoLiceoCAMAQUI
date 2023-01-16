

import { useState, useEffect } from 'react';

import { Box, Typography, Modal, Button, Stack } from '@mui/material'

import { stylesBoxContainer } from '../ModalTarjetasAprendizaje/ClasesScModalCartasAprendizaje'

import { CartasAprendizaje } from '../../../cartasAprendizaje/CartasAprendizaje'


export const ModalTarjetasAprendizaje = ({ nameCurso, open, handleClose }) => {

    const listaPreguntas = []

    const pregunta1 = {
        contenido: '¿Cuanto es 34 + 1?',
        respuesta: '15'
    }

    const pregunta2 = {
        contenido: '¿La tierra es plana?',
        respuesta: 'Si la tierra es redonda'
    }

    listaPreguntas.push(pregunta1)
    listaPreguntas.push(pregunta2)
    listaPreguntas.push(pregunta1)
    listaPreguntas.push(pregunta2)
    listaPreguntas.push(pregunta2)
    listaPreguntas.push(pregunta2)
    listaPreguntas.push(pregunta2)



    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={stylesBoxContainer}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', background: '#4FA4D3', padding: '2.5vh', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', color: 'white' }}>
                    <Typography id="Cartas" variant="h6" component="h2">
                        Cartas de aprendizaje
                    </Typography>
                    <Stack flexDirection="row">
                        <Button sx={{ background: ' rgb(7, 86, 114)', color: 'white', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)'}}}
                        >
                            Crear
                        </Button>
                        <Button sx={{ background: ' rgb(7, 86, 114)', color: 'white', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }, marginLeft:'1vh'}}
                            onClick={handleClose}
                        >
                            Cerrar
                        </Button>
                        {/* <BotonAgregar
                            idGrupo={idGrupo}
                            cedula={cedula}
                            onChanged={handleChanged}
                        /> */}
                    </Stack>
                </Box>
                <div style={{ width: '100%', background: 'black', height: '1px' }}></div>

                <Box sx={{ height: '86%', overflowY: 'auto', width: 'auto', background: '', display: 'grid', gridTemplateColumns: 'auto auto', padding: '1vh', gap: '1vh' }} >
                    {listaPreguntas.map((pregunta, index) => (
                            <CartasAprendizaje key={index} nameCurso={nameCurso} pregunta={pregunta.contenido} respuesta={pregunta.respuesta} />
                    ))}
                </Box>

            </Box>
            {/* Acá va el componente de las cartas */}
        </Modal>
    )
}
