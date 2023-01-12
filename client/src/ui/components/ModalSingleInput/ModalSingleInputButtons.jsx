

import { Stack, IconButton, Tooltip } from "@mui/material"
import { KeyboardReturn, Send } from "@mui/icons-material"

import { stylesBotonRegresarEnviar } from '../ModalVisualizacion/ClasesSxModal'

export const ModalSingleInputButtons = ({ onClose }) => {
  return (
    <Stack spacing={2} direction="row-reverse" sx={{pb:1, mr:2}}>
        
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
