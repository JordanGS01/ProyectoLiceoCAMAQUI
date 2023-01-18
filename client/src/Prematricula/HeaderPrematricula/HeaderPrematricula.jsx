import React from 'react'


import { AppBar, Toolbar, Typography } from '@mui/material'

import Logo from '../../PaginaPrincipal/assets/Logo.svg'



export const HeaderPrematricula = () => {
    return (
        <>
            <AppBar sx={{background:'#DFDDDD'}} position="fixed">
                <Toolbar>
                    <a href="/paginaPrincipal"> <img src={Logo} alt="Logo del colegio" /></a>
                    <div className='PaginaPrincipal-Header-Opciones'>

                        <a  style={{color:'#0B92DC'}} href="/paginaPrincipal">
                            <Typography variant="h7">
                                Pagina Principal
                            </Typography>
                        </a>


                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
