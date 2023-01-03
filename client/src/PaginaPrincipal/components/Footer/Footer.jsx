import './Footer.css'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Link } from '@mui/material';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import FacebookIcon from '@mui/icons-material/Facebook';


export const Footer = () => {
    return (
        <footer>
            <Box sx={{ background: '#4C87A8', color: 'white' }}

                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} marginBottom={2}>
                                Servicios en línea
                            </Box>
                            <Box>
                                <Link href='/' color='inherit' sx={{ textDecoration: 'None' }}>
                                    Plataforma Virtual
                                </Link>
                            </Box>
                            <Box sx={{ marginTop: '5%' }}>
                                <Link href='/' color='inherit' sx={{ textDecoration: 'None' }} >
                                    Prematricula en línea
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} marginBottom={2}>
                                Dirección institucional
                            </Box>
                            <Box>
                                <p href='/' color='inherit'>
                                    Elmer Villalobos
                                </p>
                            </Box>
                            <Box>
                                <p href='/'>
                                    Patricia Vargas
                                </p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} marginBottom={2}>
                                Contáctenos
                            </Box>
                            <Box>
                                <Link href='#' class='phone'>
                                    <LocalPhoneIcon sx={{ color: 'white', marginRight: '2%' }}></LocalPhoneIcon>
                                    <p> 60101078</p>
                                </Link>

                                <Link href='#' class='phone'>
                                    <WhatsAppIcon sx={{ color: 'white', marginRight: '2%' }}></WhatsAppIcon>
                                    <p> 24775898</p>
                                </Link>

                                <Link href='https://www.facebook.com/CAMAQUI2002' class='phone'>
                                    <FacebookIcon sx={{ color: 'white', marginRight: '2%' }}></FacebookIcon>
                                    <p> Facebook</p>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box textAlign='center' pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
                        jordansoncompany.com, ing y sus afiliados &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}
