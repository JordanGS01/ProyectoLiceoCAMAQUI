import { Box, Button, Typography } from '@mui/material';

import { verRespuesta, ocultarRespuesta } from './ClasesScCartasAprendizaje'

import { useState } from 'react';

import { KeyboardReturn, Delete, Send, AutoFixHigh } from "@mui/icons-material"

export const CartasAprendizaje = ({ nameCurso, pregunta, respuesta }) => {

  const [volteada, SetVolteada] = useState(false);

  function changeVolteada() {
    SetVolteada(!volteada)
  }


  return (
    <>
      <Box sx={{ width: '40vh', height: '45vh', background: '#D9D9D9', borderRadius: '5px' }}>
        <Box sx={{ width: '100%', height: '5vh', background: '#4fa5d3b0', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', display: 'flex', alignItems: 'center' }}>
          <Typography marginLeft={1} fontSize={17} color="white">{nameCurso}</Typography>
          <Box sx={{ marginLeft: 'auto' }}>
            <Delete sx={{ background: '', marginRight: '1vh', color: ' rgb(7, 86, 114)' }} />
            <AutoFixHigh sx={{ background: '', marginRight: '1vh', color: ' rgb(7, 86, 114)' }} />
          </Box>
        </Box>
        <Box sx={{ height: '82%', overflowY: 'auto', margin: '15px' }}>
          <Box >
            {pregunta} 
          </Box>
          <Button onClick={changeVolteada} sx={{ color:'#4FA4D3','&:hover': { backgroundColor: '' }}} >
            Ver respuesta
          </Button>
          <Box>
            <Typography ml={2} mr={2} mb={2} sx={volteada ? verRespuesta : ocultarRespuesta}>
              <p style={{ fontFamily: 'Arial', fontSize: '13px' }}>{respuesta} Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo autem eaque tempore praesentium suscipit voluptates, eum ipsum ducimus impedit exercitationem qui dolor veritatis inventore doloribus beatae est dolores deserunt aspernatur animi harum officiis blanditiis assumenda possimus? Expedita, porro dignissimos!</p>
            </Typography>
          </Box>

        </Box>
      </Box>
    </>

  )
}
