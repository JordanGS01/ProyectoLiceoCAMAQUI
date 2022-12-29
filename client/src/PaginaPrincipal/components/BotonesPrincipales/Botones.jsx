import React from 'react'

import './Botones.css'

import Button from '@mui/material/Button'

import Box from '@mui/material/Box';

export const Botones = () => {
  return (
    <>
      <div class='caja'>
        <Box class="botones">
          <Button sx={{
            background: '#4FA4D3', height: '70px', '&:hover': {
              backgroundColor: ' #0B92DC'
            },textTransform: 'none',fontFamily:'arial'
          }}><a href="#">Prematricula en línea</a></Button>
          <Button sx={{
            background: '#4FA4D3', marginTop: '10%', height: '70px', '&:hover': {
              backgroundColor: ' #0B92DC'
            },textTransform: 'none', fontFamily:'arial'
          }
          } > <a href="#">Plataforma Virtual</a></Button>
      </Box>
    </div>

    </>
  )
}
