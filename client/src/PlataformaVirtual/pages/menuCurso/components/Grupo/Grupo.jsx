

import { useContext, useState } from "react"
import { useParams } from "react-router-dom"

import { UserContext } from "../../../../context/UserContext"

import { Box, Button } from '@mui/material'

import { Estudiantes } from '../Estudiantes/Estudiantes'

import { ModalSingleInput, Alert } from "../../../../../ui"

import { addStudentToGroup } from '../../helpers'

import { stylesBotonAgregar, stylesBoxBoton } from './ClasesSxEstudiantes'
import './Grupo.css'

export const Grupo = () => {
  const { id } = useParams();

  const { isStudent, isProfessor } = useContext(UserContext);

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
  const [openAlertError, setOpenAlertError] = useState(false);

  const [changed, setChanged] = useState(false);

  const onChange = () => setChanged(!changed);

  const onCloseModalCreate = () => setOpenModalCreate(false);
  const onOpenModalCreate = () => setOpenModalCreate(true);

  const onCloseAlertError = () => { setOpenAlertError(false) };
  const onCloseAlertSuccess = () => { setOpenAlertSuccess(false) };

  const onAddedStudent = () => {
    setOpenAlertSuccess(false);
    setOpenModalCreate(false);
    onChange();
  }

  const onSubmitForm = (formState, onResetForm) => {
    const { tituloF: cedula } = formState;

    addStudentToGroup(id, cedula, setOpenAlertSuccess, setOpenAlertError);
    onResetForm();
  }

  const profesor = 'Ernesto Solis'

  return (
    <>

    <Box className='Box-grupo'>
      {(isStudent() && 
        <div style={{ background: 'red', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#4FA4D3', display: 'flex', flexDirection: 'row' }}>
          <h2 style={{ fontFamily: 'Arial', color: 'white', paddingLeft: '2vh' }}>Grupo</h2>
        </div>
      )}

      {(isProfessor() && 
        <div style={{ background: 'red', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#4FA4D3', display: 'flex', flexDirection: 'row' }}>
          <h2 style={{ fontFamily: 'Arial', color: 'white', paddingLeft: '2vh' }}>
            Estudiantes
          </h2>

        <Box sx={stylesBoxBoton}>
          <Button 
            sx={stylesBotonAgregar}
            onClick={onOpenModalCreate}
          >
            Agregar
          </Button>
        </Box>
        </div>
      )}
      <Box sx={{ marginLeft: '3vh', height: '35vh', background: '', width: '74vh' }}>
        <Box sx={{ marginTop: '3vh' }}>
          {(isStudent() && 
            <div style={{ fontFamily: 'Arial', color: '#4FA4D3', paddingLeft: '2vh' }}>
              <h3>Docente:</h3>
              <li>{profesor}</li>
            </div>
          )}

          {(isStudent() && 
            <h3 style={{ fontFamily: 'Arial', color: '#4FA4D3', paddingLeft: '2vh' }}>
              Estudiantes:
            </h3>
          )}

          {(isStudent() &&
            <Box sx={{ height: '17vh', overflowY: 'auto' }}>
              <Estudiantes
                changed={changed}
                onChange={onChange}
              />
            </Box>
          )}

          {(isProfessor() &&
          <Box sx={{ height: '40vh', overflowY: 'auto' }}>
            <Estudiantes
              changed={changed}
              onChange={onChange}
            />
          </Box>
        )}
        </Box>
      </Box>
    </Box>

    <ModalSingleInput
      titulo="Cédula del estudiante"
      tituloInput="Cédula del estudiante"
      tituloObj=""
      open={openModalCreate}
      onClose={onCloseModalCreate}
      onSubmitForm={onSubmitForm}
    />

    {/* Alert que se mostrará cuando se cree la tarea correctamente */}
    <Alert 
        open = { openAlertSuccess }
        handleClose = { onCloseAlertSuccess }
        title = "Estudiante agregado"
        content = "Se ha agregado el estudiante exitosamente"
        acceptButtonText = "Aceptar"
        acceptButtonFunction = { onAddedStudent }
        oneButton = { true }
    />
    
    {/* Alert que se mostrará cuando suceda algún error */}
    <Alert 
        open = { openAlertError }
        handleClose = { onCloseAlertError }
        title = "Error"
        content = "Se ha producido un error al intentar agregar el estudiante. Posiblemente el estudiante no exista o ya se encuentre en el grupo."
        acceptButtonText = "Aceptar"
        acceptButtonFunction = { onCloseAlertError }
        oneButton = { true }
    />

    </>
  )
}
