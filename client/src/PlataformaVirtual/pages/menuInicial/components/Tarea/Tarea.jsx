

import { Box } from '@mui/material'

import { stylesBoxContenedor } from './ClasesSxTarea'
import './Tarea.css'

export const Tarea = ({ id, cedula, contenido, titulo }) => {
    return (
        <Box sx={stylesBoxContenedor}>
            <p className="Tarea-Titulo">
                {titulo}
            </p>
        </Box>
    )
}
