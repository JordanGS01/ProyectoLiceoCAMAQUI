

import { useState } from "react";

import { useForm } from "../../../../hooks";
import { onFormSubmit } from "../../../signIn/helpers/registrarUsuario";

import { FormControl, Typography, TextField,
         InputAdornment, IconButton} from "@mui/material"
import { Visibility, VisibilityOff, PasswordOutlined,
         PermIdentityOutlined, BadgeOutlined } from "@mui/icons-material"

import { ButtonsModal } from "./"
import { Alert } from "../../../../../ui/components/Alert"

export const FormAddProfessor = ({ onCloseModal }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [warnings, setWarnings] = useState({
        nombreInvalido: false,
        cedulaInvalida: false,
        contraInvalida: false,
        contraNoCoincide: false
    })
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);

    const { formState, onInputChange } = useForm({
        nombre: '',
        cedula: '',
        contra: '',
        repContra: '',
        tipo:'P'
    });
    const { nombre, cedula, contra, repContra } = formState;
    const { nombreInvalido, cedulaInvalida, contraInvalida, contraNoCoincide } = warnings;

  return (
    <>
    <form onSubmit={ (e) => { onFormSubmit( e, formState, setWarnings, setOpenAlertSuccess, setOpenAlertError ) } }>

        <Typography variant="h3" gutterBottom sx={{ ml: 2, color: '#FFFFFF' }}>
            Registrarse
        </Typography>
        
        {/* Sección de nombre completo */}
        <FormControl sx={{ m: 2, ml: 3, width: '90%' }}>
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
                

                { ... ( nombreInvalido && { error: true } ) }
                { ... ( nombreInvalido && { helperText: 'El nombre no debe contener números o símbolos' } ) }

                value={nombre}
                name='nombre'
                onChange={onInputChange}
            />
        </FormControl>

        {/* Sección de la cédula */}
        <FormControl sx={{ m: 2, ml: 3, width: '90%' }}>
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

                { ... ( cedulaInvalida && { error: true } ) }
                { ... ( cedulaInvalida && { helperText: 'La cédula debe conener 9 dígitos' } ) }

                value={cedula}
                name='cedula'
                onChange={onInputChange}
            />
        </FormControl>
        
        {/* Sección de la contraseña */}
        <FormControl sx={{ m: 2, ml: 3, width: '90%' }}>
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

                { ... ( contraInvalida && { error: true } ) }
                { ... ( contraInvalida && { helperText: 'La contraseña debe ser de mínimo 6 dígitos' } ) }

                value={contra}
                name='contra'
                onChange={onInputChange}
            />

        </FormControl>

        {/* Sección de confirmar contraseña */}
        <FormControl sx={{ m: 2, ml: 3, width: '90%' }}>
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

                { ... ( contraNoCoincide && { error: true } ) }
                { ... ( contraNoCoincide && { helperText: 'Las contraseñas no coinciden' } ) }

                value={repContra}
                name='repContra'
                onChange={onInputChange}
            />

        </FormControl>

        <ButtonsModal handleClose={onCloseModal}/>

    </form>

        {/* Alert que se mostrará cuando el registro se culmine exitosamente */}
        <Alert 
            open = { openAlertSuccess }
            handleClose = {() => { setOpenAlertSuccess(false) }}
            title = "Registro exitoso"
            content = "Se ha registrado exitosamente en el sistema"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = { onCloseModal }
            oneButton = { true }
        />
        
        {/* Alert que se mostrará cuando no se pueda registrar el usuario porque ya 
            existe otro usuario con el número de cédula ingresado */}
        <Alert 
            open = { openAlertError }
            handleClose = {() => { setOpenAlertError(false) }}
            title = "Ha ocurrodo un error"
            content = "El número de cédula que digitó ya existe registrado en el sistema"
            acceptButtonText = "Aceptar"
            acceptButtonFunction = {() => { setOpenAlertError(false) }}
            oneButton = { true }
        />

    </>
  )
}
