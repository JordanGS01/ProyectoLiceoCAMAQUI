
import './PaginaPrincipal.css'

import Grid from '@mui/material/Grid';
import { Informacion } from './components/Informacion/Informacion'

import { Header } from './components/Header/Header'
import { NoticiaPrincipal } from './components/NoticiaPrincipal/NoticiaPrincipal'

import { Botones } from './components/BotonesPrincipales/Botones';


export const PaginaPrincipal = () => {
    return (
        <>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <NoticiaPrincipal />
                </Grid>
                <Grid item xs={6}>
                    <Botones />
                </Grid>
            </Grid>

            <Informacion
                titulo={"¿Que es la plataforma virtual?"}
                contenido={"Liceo CAMAQUI cuenta con un sistema en linea que brinda apoyo a los estudiantes en su proceso de aprendizaje, aquí puedes realizar actividades como: Revisar tus cursos matriculados según tu grupo Agregar, modificar o eliminar tareas pendientes Unirte a una nueva clase"}
            />

            <Informacion
                titulo={"Algo"}
                contenido={"Liceo CAMAQUI cuenta con un sistema en linea que brinda apoyo a los estudiantes en su proceso de aprendizaje, aquí puedes realizar actividades como: Revisar tus cursos matriculados según tu grupo Agregar, modificar o eliminar tareas pendientes Unirte a una nueva clase"}
            />
            <Informacion
                titulo={"Algo"}
                contenido={"akjdhsakdkjasdkhdkjashkjdhksa"}
            />
            <Informacion
                titulo={"Algo"}
                contenido={"akjdhsakdkjasdkhdkjashkjdhksa"}
            />
        </>
    )
}
