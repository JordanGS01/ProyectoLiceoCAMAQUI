

import { Box, Container, Grid, Link } from '@mui/material';
import { LocalPhone, WhatsApp, Facebook } from '@mui/icons-material';

import './Footer.css'


export const Footer = () => {
    return (
        <footer>
            <Box 
                sx={{ background: '#4C87A8', color: 'white' }}
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
                                <Link href='/prematricula' color='inherit' sx={{ textDecoration: 'None' }} >
                                    Prematricula en línea
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} marginBottom={2}>
                                Dirección institucional
                            </Box>
                            <Box>
                                <p color='inherit'>
                                    Elmer Villalobos
                                </p>
                            </Box>
                            <Box>
                                <p>
                                    Patricia Vargas
                                </p>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} marginBottom={2}>
                                Contáctenos
                            </Box>
                            <Box>
                                <Link class='PaginaPrincipal-Footer-Phone'>
                                    <LocalPhone sx={{ color: 'white', marginRight: '2%' }} />
                                    <p>6010-1078</p>
                                </Link>

                                <Link class='PaginaPrincipal-Footer-Phone'>
                                    <WhatsApp sx={{ color: 'white', marginRight: '2%' }} />
                                    <p>2477-5898</p>
                                </Link>

                                <Link href='https://www.facebook.com/CAMAQUI2002' class='phone'>
                                    <Facebook sx={{ color: 'white', marginRight: '2%' }} />
                                    <p>Facebook</p>
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
