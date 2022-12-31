

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Box, FormControl, TextField, Button, InputAdornment, IconButton, Typography } from '@mui/material'
import { PermIdentityOutlined ,BadgeOutlined, PasswordOutlined, Visibility, VisibilityOff } from '@mui/icons-material'

import './FormSignin.css'
import { useForm } from '../../../../hooks'


export const FormSignin = () => {
  
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const { formState, onInputChange, onResetForm } = useForm({
        nombre:'',
        cedula:0,
        contra:'',
        repContra:''
    });
    const { nombre, cedula, contra, repContra } = formState;


    useEffect(() => {
      //FALTA AGREGAR FUNCIONCILLAS
    }, [formState])
    

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
            Registrarse
        </Typography>
        
        {/* INCOMPLETO */}
        {/* Sección de nombre completo */}
        <FormControl sx={{ m: 2 }}>
            <TextField
                required
                autoFocus
                label='Nombre completo'
                id='nombre-usuario'
                InputProps={{
                    startAdornment:(
                        <InputAdornment position='start'>
                            <PermIdentityOutlined />
                        </InputAdornment>
                    )
                }}
                sx={{ backgroundColor: '#FFFDFD', borderRadius: '5px' }}
                variant='filled'

                value={nombre}
                name='nombre'
                onChange={onInputChange}
            />
        </FormControl>

        {/* INCOMPLETO */}
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
                type='number'

                value={cedula}
                name='cedula'
                onChange={onInputChange}
            />
        </FormControl>
        
        {/* INCOMPLETO */}
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

                value={contra}
                name='contra'
                onChange={onInputChange}
            />

        </FormControl>

        {/* INCOMPLETO */}
        {/* Sección de confirmar contraseña */}
        <FormControl sx={{ m: 2 }}>
            <TextField
                required
                label='Vuelva a ingresar la contraseña'
                id='repetir-contra-usuario'
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

                value={repContra}
                name='repContra'
                onChange={onInputChange}
            />

        </FormControl>
        
        {/* INCOMPLETO */}
        {/* Sección de la botones */}
        <div className='FormSignin-ContenedorBotones'>
            <Button
                variant="contained"
                onClick={ () => { navigate('/login') } }
            >
                Regresar
            </Button>

            <Button
                variant="contained"
                sx={{ ml: 1, mr: 2 }}
            >
                Registrarse
            </Button>
        </div>

    </Box>
  )
}
