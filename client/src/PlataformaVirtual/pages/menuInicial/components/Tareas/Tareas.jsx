

import { useState, useContext, useEffect } from 'react'

import { UserContext } from '../../../../context/UserContext'

import { Button, Box } from '@mui/material'

import { ModalVisualizacion, Alert } from '../../../../../ui'

import { Tarea } from '../Tarea/Tarea'

import { stylesBoxContenedorPrincipal, stylesBoxBoton,
         stylesBoxTareas, stylesBotonAgregar } from './ClasesSxTareas'
import './Tareas.css'

import { getAllTodos, addTodo } from '../../helpers'


export const Tareas = () => {
    const { getUserData } = useContext(UserContext);
    
    const [todos, setTodos] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);
    const [changed, setChanged] = useState(false);

    const onOpenModal = () => setOpenModal(true);
    const onCloseModal = () => setOpenModal(false);
    const onChanged = () => setChanged(!changed);

    const onCreatedTODO = () => {
        setOpenAlertSuccess(false);
        setOpenModal(false);
    }

    const onAddTarea = (formState, onResetForm) => {
        const { cedula } = getUserData();
        addTodo( cedula, formState, setOpenAlertSuccess, setOpenAlertError );
        onResetForm();
    }

    useEffect(() => {
        const userData = getUserData();
        getAllTodos(userData, setTodos);
    }, [openAlertSuccess, changed])//Para que los todos se refresquen siempre que se agregue uno nuevo

    { (!todos || todos === undefined) && <></> }


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
                {todos.map(({ id, cedula_usuario, contenido, titulo }) => (
                    <Tarea 
                        key = {id}
                        id = {id}
                        cedula = {cedula_usuario}
                        contenido = {contenido}
                        titulo = {titulo}
                        onChanged = {onChanged}
                    />
                ))}
            </Box>
        </Box>

        <ModalVisualizacion 
            open={openModal}
            handleClose={ onCloseModal }

            titulo={ "Nueva tarea" }
            botonesActivos={{
                eliminar: false,
                modificar: false,
                enviar: true
            }}
            funcionesBotones={{
                onEliminar: () => {},
                onModificar: () => {},
            }}
            onSubmitForm={onAddTarea}
        />

        {/* Alert que se mostrará cuando se cree la tarea correctamente */}
        <Alert 
            open = { openAlertSuccess }
            handleClose = {() => { setOpenAlertSuccess(false) }}
            title = "Tarea creada"
            content = "La tarea se ha creado correctamente"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { onCreatedTODO }
            oneButton = { true }
        />
        
        {/* Alert que se mostrará cuando suceda algún error */}
        <Alert 
            open = { openAlertError }
            handleClose = {() => { setOpenAlertError(false) }}
            title = "Error"
            content = "Se ha producido un error al crear la tarea"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = {() => { setOpenAlertError(false) }}
            oneButton = { true }
        />

        </>
    )
}
