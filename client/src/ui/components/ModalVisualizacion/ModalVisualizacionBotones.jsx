

import { Stack, IconButton, Tooltip } from "@mui/material"
import { KeyboardReturn, Delete, Send, AutoFixHigh } from "@mui/icons-material"

import { stylesBotonRegresarEnviar, stylesBotonEliminar, stylesBotonModificar } from './ClasesSxModal'


export const ModalVisualizacionBotones = ({ activos, funcionesBotones, onClose }) => {
    const { eliminar, modificar, enviar } = activos;
    const { onEliminar } = funcionesBotones;

  return (
    <Stack spacing={2} direction="row-reverse" sx={{pb:1, mr:2}}>
        
        {enviar ?
            <Tooltip title="Enviar" arrow>
                <IconButton
                    aria-label="enviar"
                    color="primary"
                    sx={stylesBotonRegresarEnviar}
                    type="submit"
                    
                >
                    <Send />
                </IconButton>
            </Tooltip>
        : <></>}
        
        {modificar ?
            <Tooltip title="Modificar" arrow>
                <IconButton
                    aria-label="modificar"
                    color="primary"
                    sx={stylesBotonModificar}
                    type="submit"
                >
                    <AutoFixHigh />
                </IconButton>
            </Tooltip>
        : <></>}

        {eliminar ?
            <Tooltip title="Eliminar" arrow>
                <IconButton 
                    aria-label="eliminar"
                    color="primary"
                    sx={stylesBotonEliminar}
                    onClick={onEliminar}
                >
                    <Delete />
                </IconButton>
            </Tooltip>
        : <></>}

        <Tooltip title="Cerrar" arrow>
            <IconButton 
                aria-label="regresar" 
                color="primary" 
                sx={stylesBotonRegresarEnviar}
                onClick={onClose}
            >
                <KeyboardReturn />
            </IconButton>
        </Tooltip>
    </Stack>
  )
}
