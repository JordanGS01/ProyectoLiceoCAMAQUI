import Box from '@mui/material/Box';

import './Informacion.css'

export const Informacion = ({ titulo, contenido }) => {
  return (
    <>
      <Box sx={{ background: '#D9D9D9', height: '100%',borderRadius:'5px'
        }}>
        <h2 class ='tituloNoticia'>{titulo}</h2>
        <p class = "parrafo">{contenido}</p>
      </Box>

    </>
  )
}
