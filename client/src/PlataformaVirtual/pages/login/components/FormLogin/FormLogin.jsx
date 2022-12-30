

import { useState } from 'react';

import { Box, FormControl, TextField, Button, InputAdornment, IconButton, Typography } from '@mui/material'
import { BadgeOutlined, PasswordOutlined, Visibility, VisibilityOff } from '@mui/icons-material'

import './FormLogin.css'


export const FormLogin = () => {
  
    const [showPassword, setShowPassword] = useState(false);

    return (
    <Box
        component="span" 
        sx={{   p: 2,
                border: '1px solid grey',
                background: '#4FA4D3',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
            }}
    >

        <Typography variant="h3" gutterBottom sx={{ ml: 2, color: '#FFFFFF' }}>
            Iniciar sesión
        </Typography>
        
        {/* Sección de la cédula */}
        <FormControl sx={{ m: 2 }}>
            <TextField
                required
                label='Número de cédula'
                id='cedula-usuario'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position='start'>
                            <BadgeOutlined />
                        </InputAdornment>
                    )
                }}
                sx={{ backgroundColor: '#FFFDFD', borderRadius: '5px' }}
                variant='filled'
            />
        </FormControl>  
        {/* Sección de la contraseña */}
        <FormControl sx={{ m: 2 }}>
            <TextField
                required
                label='Contraseña'
                id='contra-usuario'
                type={ showPassword ? 'text' : 'password' }
                InputProps={{
                    startAdornment:(
                        <InputAdornment position='start'>
                            <PasswordOutlined />
                        </InputAdornment>
                    ),
                    endAdornment:(
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={ () => setShowPassword(!showPassword) }
                                onMouseDown={ (event) => event.preventDefault() }
                            >
                                { showPassword ? <VisibilityOff /> : <Visibility /> }
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                sx={{ backgroundColor: '#FFFDFD', borderRadius: '5px' }}
                variant='filled'
            />

        </FormControl>
        {/* Sección de recuperar contraseña */}
        <Typography variant="caption" gutterBottom sx={{ ml: 'auto', mr: 2, mb: 2, color: '#FFFFFF' }}>
            ¿Olvidó su contraseña? Haga click aquí
        </Typography>
        {/* Sección de la botones */}
        <div className='FormLogin-ContenedorBotones'>

            <Button variant="contained">Registrarse</Button>

            <Button
                variant="contained"
                sx={{ ml: 1, mr: 2 }}
            >
                Ingresar
            </Button>

        </div>

    </Box>
  )
}
