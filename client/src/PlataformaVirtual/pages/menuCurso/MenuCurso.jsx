import React from 'react'

import { NavBar } from "../../../ui/components/NavBar/NavBar";

import { Breadcrums } from "../../../ui/Breadcrums/Breadcrums";

import { Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export const MenuCurso = () => {

  const navigate = useNavigate();

  const {direccion} = useParams()

  const lista = []

  lista.push('Menú Principal')
  lista.push(direccion)


  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={{background:'', width:'78%'}}>
          <Breadcrums ruta={lista}/>
          <button onClick={()=>navigate(-1)}>Volver</button>
        </Box>
      </Box>
    </>
  )
}
