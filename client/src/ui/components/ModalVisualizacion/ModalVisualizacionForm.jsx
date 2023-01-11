

import { FormControl, TextField } from "@mui/material"

import { stylesInputForm, stylesInputLabelProps, stylesInputProps } from './ClasesSxModal'


export const ModalVisualizacionForm = ({ onInputChange, titulo, contenido }) => {
  return (
    <>
        {/* Sección de nombre completo */}
        <FormControl sx={{ m: 2, ml: 3, width: '90%' }}>
            <TextField
                required
                multiline
                autoFocus
                label='Titulo'
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

        <FormControl sx={{ m: 2, ml: 3, width: '90%' }}>
            <TextField
                required
                multiline
                label='Descripción'
                id='descripcion'
                sx={stylesInputForm}
                variant='outlined'
                minRows={5}
                maxRows={5}
                InputLabelProps={{
                    shrink: true,
                    sx: stylesInputLabelProps
                }}
                InputProps={{
                    sx: stylesInputProps
                }}

                value={contenido}
                name='contenido'
                onChange={onInputChange}
            />
        </FormControl>
    </>
  )
}
