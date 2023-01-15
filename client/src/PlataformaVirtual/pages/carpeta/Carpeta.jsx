import React from 'react'

import { NavBar } from "../../../ui"

import { Box } from "@mui/system"


import { Breadcrums } from "../../../ui/Breadcrums/Breadcrums";
import { useParams } from 'react-router-dom';



export const Carpeta = () => {

    const lista = []
    const { idCurso, nombreCurso, nombreCarpeta } = useParams()

    lista.push('Menú Principal')
    lista.push(nombreCurso)
    lista.push('Documentos')

    



    //lista.push(nombreCarpeta)
  

    return (
        <>

            <NavBar />

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Box sx={{ width: '80%' }} >
                    <Breadcrums idCurso={idCurso} ruta={lista} direccion={nombreCarpeta} />
                </Box>
            </Box>


        </>
    )
}
