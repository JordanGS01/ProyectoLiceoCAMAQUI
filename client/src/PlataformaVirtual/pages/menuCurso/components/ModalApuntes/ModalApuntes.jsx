

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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', background: '#4FA4D3', padding: '2.5vh', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', color: 'white' }}>
                    <Typography id="Apuntes" variant="h6" component="h2">
                        Apuntes
                    </Typography>
                    
                    <Stack flexDirection="row">
                        <BotonAgregar
                            idGrupo={idGrupo}
                            cedula={cedula}
                            onChanged={handleChanged}
                        />
                        <Button
                            onClick={handleClose}
                            sx={{ background: ' rgb(7, 86, 114)', color: 'white', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }, marginLeft:'1vh'}}
                        >
                            Cerrar
                        </Button>
                    </Stack>
                </Box>

                <ListaApuntes notes={userNotes} handleChanged={handleChanged}/>

            </Box>
        </Modal>
    )
}
