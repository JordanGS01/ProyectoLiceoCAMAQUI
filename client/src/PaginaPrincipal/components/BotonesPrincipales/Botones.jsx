

import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

import './Botones.css'


export const Botones = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='PP-Botones-Container'>

        <Box className="PP-Botones">

          <Button 
            sx={{
              background: '#4FA4D3',
              height: '70px', 
              '&:hover': { backgroundColor: ' #0B92DC' },
              textTransform: 'none',
              fontFamily:'arial',
              color: '#FFFFFF'
            }}

            onClick = { () => { navigate('/prematricula') } }
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

            onClick = { () => { navigate('/pv') } }
          >
            Plataforma Virtual
          </Button>
      </Box>

    </div>
    </>
  )
}
