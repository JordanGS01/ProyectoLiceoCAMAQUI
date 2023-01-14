

import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { UserContext } from "../../../../context/UserContext"

import { getGroupStudents, deleteFromGroup } from "../../helpers"

import { Tooltip, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

import { Alert } from "../../../../../ui"

import { stylesBotonEliminar } from './ClasesSxEstudiantes'
import './Estudiantes.css'


export const Estudiantes = () => {
    const { id } = useParams();

    const { isProfessor } = useContext(UserContext);

    const [estudiantes, setEstudiantes] = useState([]);
    const [clickedUser, setClickedUser] = useState({
        cedula: '',
        idGrupo:''
    });
    const [openDeleteStudent, setOpenDeleteStudent] = useState(false);
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

    const [changed, setChanged] = useState(false);

    const handleCloseModalDeleteStudent = () => setOpenDeleteStudent(false);
    const handleCloseAlertSuccess = () => setOpenAlertSuccess(false);
    const handleCloseAlertError = () => setOpenAlertError(false);
    
    const onChange = () => setChanged(!changed);

    const onDeleteGroup = (cedula, idGrupo) => {
        setClickedUser({
            cedula,
            idGrupo
        });
        setOpenDeleteStudent(true);
    }

    const deleteGroup = () => {
        const { idGrupo, cedula } = clickedUser;
        
        deleteFromGroup(idGrupo, cedula, onChange, setOpenAlertSuccess, setOpenAlertError);
        setOpenDeleteStudent(false);
    }

    useEffect(() => {
        getGroupStudents(id, setEstudiantes);
    }, [changed])
    

    { (!estudiantes || estudiantes === undefined) && <></> }


    return (
        <>
        <ul style={{color: '#4FA4D3'}}>
            {estudiantes.map(({ cedula_usuario, id_grupo, nombre_completo }) => {
                return(
                    <div className="Estudiantes-ContainerEstudiante">
                        <li>
                            {nombre_completo}
                        </li>

                        {isProfessor() ?
                            <Tooltip title="Eliminar" arrow>
                                <IconButton 
                                    aria-label="eliminar"
                                    color="primary"
                                    sx={stylesBotonEliminar}
                                    onClick={()=>{onDeleteGroup(cedula_usuario, id_grupo)}}
                                >
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        : <></>
                        }
                    </div>
                )
            })}
        </ul>

        <Alert 
            open = { openDeleteStudent }
            handleClose = { handleCloseModalDeleteStudent }
            title = "Eliminar estudiante"
            content = "¿Está seguro de que desea eliminar al estudiante del grupo?"
            
            acceptButtonText = "Sí"
            acceptButtonFunction = { deleteGroup }

            closeButtonText="No"
            closeButtonFunction = { handleCloseModalDeleteStudent }

            oneButton = { false }
        />

        <Alert 
            open = { openAlertSuccess }
            handleClose = { handleCloseAlertSuccess }
            title = "Eliminado correctamente"
            content = "Se ha eliminado el estudiante de manera exitosa"
            
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { handleCloseAlertSuccess }

            oneButton = { true }
        />

        <Alert 
            open = { openAlertError }
            handleClose = { handleCloseAlertError }
            title = "Error"
            content = "Ha ocurrido un error al intentar eliminar el estudiante, por favor, inténtelo de nuevo"
            
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { handleCloseAlertError }

            oneButton = { true }
        />

        </>
    )
}
