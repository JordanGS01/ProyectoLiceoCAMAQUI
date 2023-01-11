

import { useState, useContext, useEffect } from 'react'

import { UserContext } from '../../../../context/UserContext'

import { Button, Box } from '@mui/material'

import { ModalVisualizacion } from '../../../../../ui/components/ModalVisualizacion/ModalVisualizacion'
import { Tarea } from '../Tarea/Tarea'

import { stylesBoxContenedorPrincipal, stylesBoxBoton,
         stylesBoxTareas, stylesBotonAgregar } from './ClasesSxTareas'
import './Tareas.css'

import { getAllTodos } from '../../helpers'


export const Tareas = () => {
    const { getUserData } = useContext(UserContext);
    
    const [todos, setTodos] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const userData = getUserData();
        getAllTodos(userData, setTodos);
    }, [])

    { (!todos || todos === undefined) && <></> }

    const onOpenModal = () => setOpenModal(true);
    const onCloseModal = () => setOpenModal(false);

    const pruebaSubmit = (formState) => {
        console.log(formState)
    }

    return (
        <>
        <Box sx={ stylesBoxContenedorPrincipal }>
            <div className='Tareas-ContenedorHeader'>
                
                <h2 className='Tareas-Header2'> 
                    Tareas
                </h2>
                
                <Box sx={ stylesBoxBoton }>
                    <Button 
                        sx={stylesBotonAgregar}
                        onClick={onOpenModal}
                    >
                        Agregar
                    </Button>
                </Box>

            </div>

            <Box sx={stylesBoxTareas}>
                {todos.map(({ id, cedula, contenido, titulo }) => (
                    <Tarea 
                        key = {id}
                        id = {id}
                        cedula = {cedula}
                        contenido = {contenido}
                        titulo = {titulo}
                    />
                ))}
            </Box>
        </Box>

        <ModalVisualizacion 
            open={openModal}
            handleClose={ onCloseModal }
            // handleOpen={ onOpenModal }
            titulo={ "Nueva tarea" }
            botonesActivos={{
                eliminar: false,
                modificar: false,
                enviar: true
            }}
            funcionesBotones={{
                onEliminar: ()=>{console.log('eliminar')},
                onModificar: ()=>{console.log('modificar')},
            }}
            onSubmitForm={pruebaSubmit}
        />
        </>
    )
}
