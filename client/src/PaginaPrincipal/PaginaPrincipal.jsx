
import './PaginaPrincipal.css'

import Grid from '@mui/material/Grid';
import { Informacion } from './components/Informacion/Informacion'

import { Header } from './components/Header/Header'
import { NoticiaPrincipal } from './components/NoticiaPrincipal/NoticiaPrincipal'

import { Botones } from './components/BotonesPrincipales/Botones';


import { Footer } from './components/Footer/Footer';


import Box from '@mui/material/Box';

export const PaginaPrincipal = () => {
    return (
        <>
            <Header />

            <Box class='PaginaPrincipal-Container'>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <NoticiaPrincipal />
                    </Grid>
                    <Grid  item xs={6}>
                        <Botones />
                    </Grid>
                </Grid>

                <Informacion
                    titulo = "¿Que es la plataforma virtual?"
                    contenido = "Liceo CAMAQUI cuenta con un sistema en linea que brinda apoyo a los estudiantes en su proceso de aprendizaje, aquí puedes realizar actividades como: Revisar tus cursos matriculados según tu grupo Agregar, modificar o eliminar tareas pendientes Unirte a una nueva clase"
                    id = "QueEsLaPlataforma"
                />

                <Informacion
                    titulo = "Misión"
                    contenido = "Educar y formar integralmente con la finalidad que los estudiantes alcancen su autorrealización humana y profesional a través de un proyecto educativo innovador que desarrolle competencias, pensamiento crítico y analítico, aptitudes, habilidades y destrezas."
                    id = "Mision"
                />
                <Informacion
                    titulo = "Visión"
                    contenido = "Liceo CAMAQUI busca digitalizar procesos realizados cotidianamente por los profesores y estudiantes de dicha institución para brindar herramientas que potencien el proceso de aprendizaje. Además pretende explotar los recursos electrónicos presentes en la institución, involucrando a los estudiantes en el desarrollo tecnológico y así evolucionar hacia un mundo más automatizado."
                    id = "Vision"
                />
                <Informacion
                    titulo = "Acerca del Liceo CAMAQUI"
                    contenido = "Tramite para posible apertura de CINDEA, abarca los ciclos de la eduación general básica y los estudiantes avanzan por medio de módulos y créditos. Los módulos se aprueban en forma independiente unos de otros y los estudiates avanzan a su propio ritmo de estudio"
                    id = "AcercaDe"
                />
            </Box>
            <Footer />

        </>
    )
}
