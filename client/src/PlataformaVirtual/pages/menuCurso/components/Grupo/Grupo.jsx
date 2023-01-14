

import { useContext } from "react"
import { UserContext } from "../../../../context/UserContext"

import { Box } from '@mui/material'

import { Estudiantes } from '../Estudiantes/Estudiantes'

import './Grupo.css'

export const Grupo = () => {


  const { isStudent, isAdmin, logOutUser, userData, loged, isProfessor } = useContext(UserContext);

  const profesor = 'Ernesto Solis'

  return (
    <Box className='Box-grupo'>
      {(isStudent() && <div style={{ background: 'red', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#4FA4D3', display: 'flex', flexDirection: 'row' }}>
        <h2 style={{ fontFamily: 'Arial', color: 'white', paddingLeft: '2vh' }}>Grupo</h2>
      </div>)}

      {(isProfessor() && <div style={{ background: 'red', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', backgroundColor: '#4FA4D3', display: 'flex', flexDirection: 'row' }}>
        <h2 style={{ fontFamily: 'Arial', color: 'white', paddingLeft: '2vh' }}>Estudiantes</h2>
      </div>)}
      <Box sx={{ marginLeft: '3vh', height: '35vh', background: '', width: '74vh' }}>
        <Box sx={{ marginTop: '3vh' }}>
          {(isStudent() && <p style={{ fontFamily: 'Arial', color: '#4FA4D3', paddingLeft: '2vh' }}> <h3>Docente:</h3><li>{profesor}</li></p>)}

          {(isStudent() && <h3 style={{ fontFamily: 'Arial', color: '#4FA4D3', paddingLeft: '2vh' }} >Estudiantes:</h3>)}

          {(isStudent() &&
            <Box sx={{ height: '17vh', overflowY: 'auto' }}>
              <Estudiantes />
            </Box>)}

          {(isProfessor() && <Box sx={{ height: '40vh', overflowY: 'auto' }}>
            <Estudiantes />
          </Box>)}

        </Box>

      </Box>
    </Box>
  )
}
