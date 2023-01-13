

import { useState, useEffect } from 'react';

import { Box, Typography, Modal, Button, Stack } from '@mui/material'

import { stylesBoxContainer } from '../ModalApuntes/ClasesScModalApuntes'


export const ModalTarjetasAprendizaje = ({ open, handleClose, cedula, idGrupo }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={stylesBoxContainer}>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography id="Cartas" variant="h6" component="h2">
                        Cartas de aprendizaje
                    </Typography>
                    
                    <Stack flexDirection="row">
                        <Button
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
            </Box>
            {/* Acá va el componente de las cartas */}
        </Modal>
    )
}
