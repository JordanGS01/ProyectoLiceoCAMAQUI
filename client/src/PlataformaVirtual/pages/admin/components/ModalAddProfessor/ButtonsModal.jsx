

import { Button, Stack } from "@mui/material";
import { Send, ArrowBack } from "@mui/icons-material";


export const ButtonsModal = ({ handleClose }) => {
  return (
    <Stack direction="row" spacing={2}>
        <Button 
            variant = "contained" 
            startIcon = { <ArrowBack /> }
            onClick = { handleClose }
        >
            Cancelar
        </Button>
        <Button
            variant = "contained" 
            color = "success" 
            endIcon = { <Send /> }
            type = "submit"
        >
            Agregar
        </Button>
    </Stack>
  )
}
