

import { Stack, IconButton } from "@mui/material"
import { KeyboardReturn, Delete, Send, AutoFixHigh } from "@mui/icons-material"

import { stylesBotonRegresarEnviar, stylesBotonEliminar, stylesBotonModificar } from './ClasesSxModal'


export const ModalVisualizacionBotones = ({ activos, funcionesBotones, onClose }) => {
    const { eliminar, modificar, enviar } = activos;
    const { onEliminar, onModificar } = funcionesBotones;

  return (
    <Stack spacing={2} direction="row-reverse" sx={{pb:1, mr:2}}>
        
        {enviar ?
            <IconButton
                aria-label="enviar"
                color="primary"
                sx={stylesBotonRegresarEnviar}
                type="submit"
            >
                <Send />
            </IconButton>
        : <></>}
        
        {modificar ?
            <IconButton
                aria-label="modificar"
                color="primary"
                sx={stylesBotonModificar}
                onClick={onModificar}
            >
                <AutoFixHigh />
            </IconButton>
        : <></>}

        {eliminar ?
            <IconButton 
                aria-label="eliminar"
                color="primary"
                sx={stylesBotonEliminar}
                onClick={onEliminar}
            >
                <Delete />
            </IconButton>
        : <></>}

        <IconButton 
            aria-label="regresar" 
            color="primary" 
            sx={stylesBotonRegresarEnviar}
            onClick={onClose}
        >
            <KeyboardReturn />
        </IconButton>
    </Stack>
  )
}
