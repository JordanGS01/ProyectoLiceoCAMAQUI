import Typography from '@mui/material/Typography';

import './NoticiaPrincipal.css'

import cancha from '../../assets/cancha.jpg'


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




export const NoticiaPrincipal = () => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Typography class='texto' variant='h7'>
          Capitán Manuel Quirós
        </Typography>
        <div class='lin'></div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img class='cancha' src={cancha} alt="" />
          </Grid>
          <Grid item xs={6}>
            <Typography class='texto' variant='h7' gutterBottom>
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
