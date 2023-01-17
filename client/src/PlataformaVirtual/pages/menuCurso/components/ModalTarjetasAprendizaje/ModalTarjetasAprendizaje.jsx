

import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom"

import { UserContext } from "../../../../context/UserContext"

import { Box, Typography, Modal, Button, Stack } from '@mui/material'

import { CartasAprendizaje } from './CartasAprendizaje'
import { BotonCrear } from "./BotonCrear"

import { getUserCartasAprendizaje } from "../../helpers"

import { stylesBoxContainer } from '../ModalTarjetasAprendizaje/ClasesScModalCartasAprendizaje'


export const ModalTarjetasAprendizaje = ({ nameCurso, open, handleClose }) => {
    const { id:idGrupo } = useParams();
    const { getUserData } = useContext(UserContext);

    const [cartas, setCartas] = useState([]);
    const [cedulaUsuario, setCedulaUsuario] = useState(0);
    const [changed, setChanged] = useState(false);

    const handleChanged = () => setChanged(!changed);

    useEffect(() => {
        const { cedula } = getUserData();
        setCedulaUsuario(cedula);


        getUserCartasAprendizaje(idGrupo, cedula, setCartas);
    }, [changed])
    

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="Modal para las tarjetas de aprendizaje"
            aria-describedby="Este modal contiene todas las tarjetas de aprendizaje relacionadas a un estudiante de un curso en específico."
        >
            <Box sx={stylesBoxContainer}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', background: '#4FA4D3', padding: '2.5vh', borderTopLeftRadius: '4px', borderTopRightRadius: '4px', color: 'white' }}>
                    <Typography id="Cartas" variant="h6" component="h2">
                        Cartas de aprendizaje
                    </Typography>
                    <Stack flexDirection="row">
                        {/* <Button sx={{ background: ' rgb(7, 86, 114)', color: 'white', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)'}}}
                        >
                            Crear
                        </Button> */}
                        <BotonCrear onChanged = {handleChanged}/>
                        <Button sx={{ background: ' rgb(7, 86, 114)', color: 'white', '&:hover': { backgroundColor: ' rgba(6, 82, 110, 0.696)' }, marginLeft:'1vh'}}
                            onClick={handleClose}
                        >
                            Cerrar
                        </Button>
                    </Stack>
                </Box>
                <div style={{ width: '100%', background: 'black', height: '1px' }}></div>

                <Box 
                    sx={{
                        height: '86%',
                        overflowY: 'auto',
                        width: 'auto',
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                        padding: '1vh',
                        gap: '1vh'
                    }}
                >
                    {cartas.map(({ id, pregunta, respuesta }) => (
                            <CartasAprendizaje
                                key={id}
                                nameCurso={nameCurso}
                                cedula={cedulaUsuario}
                                id={id}
                                idGrupo={idGrupo}
                                pregunta={pregunta}
                                respuesta={respuesta}
                                onChanged={handleChanged}
                            />
                    ))}
                </Box>

            </Box>
            {/* Acá va el componente de las cartas */}
        </Modal>
    )
}
