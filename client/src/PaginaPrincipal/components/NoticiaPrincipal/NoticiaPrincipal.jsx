

import { Typography, Box, Grid } from '@mui/material';

import cancha from '../../assets/cancha.jpg'

import './NoticiaPrincipal.css'

export const NoticiaPrincipal = () => {
  return (
    <>
      <Box sx={{ width: '100%' }}>

        <Typography class='texto' variant='h7'>
          Capitán Manuel Quirós
        </Typography>

        <div className='PaginaPrincipal-Noticia-Linea'></div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={6}>
            <img className='PaginaPrincipal-Noticia-Cancha' src={cancha} alt="" />
          </Grid>
          
          <Grid item xs={6}>
            <Typography className='PaginaPrincipal-Noticia-Texto' variant='h7' gutterBottom>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas expedita,
              ab reprehenderit officiis fuga nemo doloribus dolor asperiores dolorem, ullam
              quidem aspernatur animi tenetur ea et sequi temporibus nesciunt quibusdam.
            </Typography>
          </Grid>

        </Grid>

      </Box>
    </>

  )
}
