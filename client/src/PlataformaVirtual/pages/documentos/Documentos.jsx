
import { NavBar } from "../../../ui"

import { Box } from "@mui/system"


import { Breadcrums } from "../../../ui/Breadcrums/Breadcrums";

import { useParams } from "react-router-dom";

export const Documentos = () => {

  const { direccion} = useParams()
  const lista=[]

  lista.push('Menú Principal')
  lista.push(direccion)
  lista.push('Documentos')
  
  

  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={{ width: '80%' }} >
          <Breadcrums ruta={lista} direccion='Documentos'/>
        </Box>
      </Box>
    </>
  )
}
