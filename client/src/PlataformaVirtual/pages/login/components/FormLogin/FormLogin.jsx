

import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, FormControl, TextField, Button, InputAdornment, IconButton, Typography } from '@mui/material'
import { BadgeOutlined, PasswordOutlined, Visibility, VisibilityOff } from '@mui/icons-material'

import { UserContext } from '../../../../context/UserContext';
import { Alert } from '../../../../../ui/components/Alert';

import './FormLogin.css'
import { useForm } from '../../../../hooks';
import { onFormSubmit } from '../../helpers';


export const FormLogin = () => {
    const { setUser, loged, isStudent, isProfessor, isAdmin  } = useContext( UserContext );
    const [showPassword, setShowPassword] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);

    const navigate = useNavigate();

    const { formState, onInputChange } = useForm({
        cedula: '',
        contra: ''
    });
    const { cedula, contra } = formState;
    

    useEffect(() => {
      if( loged && (isStudent() || isProfessor()) ) {
        navigate('/menuInicial');
      } else if (loged && isAdmin()) {
        navigate('/admin');
      }
    }, [loged])
    
    return (
    <Box
        component="span" 
        width='80vh'
        sx={{   p: 2,
                border: '1px solid grey',
                background: '#4FA4D3',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
            }}
    >
        <form className='FormLogin-Form' onSubmit={ (e) => { onFormSubmit(e, formState, setUser, setOpenAlert) } }>

            <Typography variant="h3" gutterBottom sx={{ ml: 2, color: '#FFFFFF' }}>
                Iniciar sesión
            </Typography>
            
            {/* Sección de la cédula */}
            <FormControl sx={{ m: 2 }}>
                <TextField
                    required
                    autoFocus
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
                    aria-label='cedula'

                    value={ cedula }
                    name='cedula'
                    onChange={ onInputChange }
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
                    aria-label='contra'

                    value={ contra }
                    name='contra'
                    onChange={ onInputChange }
                />

            </FormControl>

            {/* Sección de recuperar contraseña */}
            <Typography variant="caption" gutterBottom sx={{ ml: 'auto', mr: 2, mb: 2, color: '#FFFFFF' }}>
                ¿Olvidó su contraseña? Haga click aquí
            </Typography>

            {/* Sección de la botones */}
            <div className='FormLogin-ContenedorBotones'>

                <Button
                    variant="contained"
                    onClick={ () => { navigate('/signin') } }
                >
                    Registrarse
                </Button>

                <Button
                    variant="contained"
                    sx={{ ml: 1, mr: 2 }}
                    type='submit'
                >
                    Ingresar
                </Button>

            </div>

        </form>

        {/* Alert que se mostrará cuando los datos ingresados no estén registrados*/}
        <Alert 
            open = { openAlert }
            handleClose = {() => { setOpenAlert(false) }}
            title = "Usuario no encontrado"
            content = "El número de cédula o la contraseña ingresada son erroneas"
            acceptButtonText = "Cerrar"
            acceptButtonFunction = {() => { setOpenAlert(false) }}
            oneButton = { true }
        />

    </Box>
  )
}
