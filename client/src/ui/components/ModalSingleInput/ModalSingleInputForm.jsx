

import { FormControl, TextField } from "@mui/material"

import { stylesInputForm, stylesInputLabelProps, stylesInputProps } from '../ModalVisualizacion/ClasesSxModal'


export const ModalSingleInputForm = ({ onInputChange, titulo, tituloInput }) => {
  return (
    <>
    {/* Sección de nombre completo */}
    <FormControl sx={{ m: 2, ml: 3, width: '90%' }}>
        <TextField
            required
            multiline
            autoFocus
            label={tituloInput}
            id='titulo'
            sx={stylesInputForm}
            variant='outlined'
            maxRows={2}    
            InputLabelProps={{
                shrink: true,
                sx: stylesInputLabelProps
            }}
            InputProps={{
                sx: stylesInputProps
            }}

            value={titulo}
            name='tituloF'
            onChange={onInputChange}
        />

    </FormControl>
    </>
  )
}
