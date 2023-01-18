

import { Typography, Box, Grid } from '@mui/material';

import cancha from '../../assets/cancha.jpg'

import './NoticiaPrincipal.css'

export const NoticiaPrincipal = () => {
  return (
    <>
      <Box  data-testid= "principal-test" sx={{ width: '100%' }}>
        <Typography data-testid= "textoPrincipal-test" className='PaginaPrincipal-Noticia-Texto' variant='h7'>
          Capitán Manuel Quirós
        </Typography>

        <div className='PaginaPrincipal-Noticia-Linea'></div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={6}>
            <img  data-testid="textoPrincipal-test" className='PaginaPrincipal-Noticia-Cancha' src={cancha} alt="" />
          </Grid>
          
          <Grid item xs={6}>
            <Typography  data-testid= "textoPrincipal-test" className='PaginaPrincipal-Noticia-Texto' variant='h7' gutterBottom>
              Esta institución es de tipo educativa, ubicada en la zona de coopevega de cutris, se cuenta con instalaciones adecuadas 
              para los estudiantes y profesores. 
              <br />
              <br />
              Se realizan actividades que fomentan la participación, el trabajo en equipo, la inovación, el arte y otras actividades que estimulan
              el aprendizaje.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>

  )
}
