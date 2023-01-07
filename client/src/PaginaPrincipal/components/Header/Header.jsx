

import { AppBar, Toolbar, Typography } from '@mui/material'

import Logo from '../../assets/Logo.svg'

import './Header.css'



export const Header = () => {

  return (
    <>
      <div data-testid='header-test' position="fixed" className='PaginaPrincipal-Navbar'>
        <Toolbar>
          <a href="/"> <img src={Logo} alt="Logo del colegio" /></a>
            <div className='PaginaPrincipal-Header-Opciones'>
              <a data-testid='link-test' className='PaginaPrincipal-Header-Enlace' href="#QueEsLaPlataforma">
                <Typography variant="h7">
                  Principal
                </Typography>
              </a>

              <a data-testid='link-test' className='PaginaPrincipal-Header-Enlace' href="#Mision">
                <Typography variant="h7">
                  Misión
                </Typography>
              </a>

              <a data-testid='link-test' className='PaginaPrincipal-Header-Enlace' href="#Vision">
                <Typography variant="h7">
                  Visión
                </Typography>
              </a>

              <a data-testid='link-test' className='PaginaPrincipal-Header-Enlace' href="#AcercaDe">
                <Typography variant="h7">
                  Acerca de Liceo CAMAQUI
                </Typography>
              </a>

            </div>
        </Toolbar>
      </div>
      <div className='PaginaPrincipal-Header-Linea'></div>
    </>
  )
}
