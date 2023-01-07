import Box from '@mui/material/Box';

import './Informacion.css'

export const Informacion = ({ titulo, contenido, id }) => {
  return (
      <Box data-testid='informacion-test'
        sx = {{ 
          background: '#D9D9D9',
          height: '100%',
          borderRadius:'5px' 
        }}
      >

        <h2 className ='PaginaPrincipal-Informacion-Titulo' id={ id }>
          { titulo }
        </h2>
        
        <p className = "PaginaPrincipal-Informacion-Parrafo">
          { contenido }
        </p>
      </Box>
  )
}
