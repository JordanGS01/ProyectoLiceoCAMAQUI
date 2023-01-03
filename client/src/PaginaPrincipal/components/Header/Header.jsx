import './Header.css'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ReactLogo from '../../assets/Logo.svg'




export const Header = () => {

  return (
    <>
      <AppBar position="fixed" class='PaginaPrincipal-Navbar'>
        <Toolbar>
          <a href="/"> <img class="LogoPrincipal" src={ReactLogo} alt="" /></a>
          <div class='container'>
            <div class='opciones'>
              <a class='enlace' href="#">
                <Typography variant="h7">
                  Principal
                </Typography>
              </a>
              <a class='enlace' href="#">
                <Typography variant="h7">
                  Misión
                </Typography>
              </a>
              <a class='enlace' href="#">
                <Typography variant="h7">
                  Visión
                </Typography>
              </a>
              <a class='enlace' href="#">
                <Typography variant="h7">
                  Acerca de Liceo CAMAQUI
                </Typography>
              </a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div class='linea'></div>
    </>
  )
}
