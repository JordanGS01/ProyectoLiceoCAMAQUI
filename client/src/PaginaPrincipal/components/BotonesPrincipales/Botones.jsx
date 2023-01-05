

import { useNavigate, Navigate } from 'react-router'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

import './Botones.css'
import { useState } from 'react';

export const Botones = () => {
  //const navigate = useNavigate();
  const [navigatePrematricula, setNavigatePrematricula] = useState(false);
  const [navigatePV, setNavigatePV] = useState(false);

  return (
    <>
      <div class='PP-Botones-Container'>

        <Box class="PP-Botones">

          <Button 
            sx={{
              background: '#4FA4D3',
              height: '70px', 
              '&:hover': { backgroundColor: ' #0B92DC' },
              textTransform: 'none',
              fontFamily:'arial',
              color: '#FFFFFF'
            }}

            //onClick = { () => { navigate('/prematricula') } }
            onClick = { () => { setNavigatePrematricula(true) } }
          >
            Prematricula en línea
          </Button>

          <Button 
            sx={{
              background: '#4FA4D3',
              marginTop: '10%',
              height: '70px',
              '&:hover': { backgroundColor: ' #0B92DC' },
              textTransform: 'none',
              fontFamily:'arial',
              color: '#FFFFFF'
            }}

            //onClick = { () => { navigate('/pv') } }
            onClick = { () => { setNavigatePV(true) } }
          >
            Plataforma Virtual
          </Button>

      </Box>

    </div>
    {navigatePV && <Navigate to='/pv' />}
    {navigatePrematricula && <Navigate to='/prematricula' />}
    </>
  )
}
