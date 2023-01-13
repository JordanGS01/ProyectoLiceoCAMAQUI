

import { useState, useEffect } from 'react';

import { Box, Typography, Modal, Button, Stack } from '@mui/material'

import { BotonAgregar } from './BotonAgregar'
import { ListaApuntes } from './ListaApuntes'

import { stylesBoxContainer } from './ClasesScModalApuntes'

import { getUserNotes } from '../../helpers'


export const ModalApuntes = ({ open, handleClose, cedula, idGrupo }) => {
    const [changed, setChanged] = useState(false);
    const [userNotes, setUserNotes] = useState([]);

    const handleChanged = () => setChanged(!changed);

    useEffect(() => {
      getUserNotes(idGrupo, cedula, setUserNotes)
    }, [changed, open])


    { (!userNotes || userNotes === undefined) && <></> }


    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={stylesBoxContainer}>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography id="Apuntes" variant="h6" component="h2">
                        Apuntes
                    </Typography>
                    
                    <Stack flexDirection="row">
                        <Button
                            onClick={handleClose}
                        >
                            Cerrar
                        </Button>
                        <BotonAgregar
                            idGrupo={idGrupo}
                            cedula={cedula}
                            onChanged={handleChanged}
                        />
                    </Stack>
                </Box>

                <ListaApuntes notes={userNotes} handleChanged={handleChanged}/>

            </Box>
        </Modal>
    )
}
