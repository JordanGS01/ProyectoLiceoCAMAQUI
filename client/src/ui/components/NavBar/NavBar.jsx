

import { Typography, AppBar, IconButton } from '@mui/material'
import { LogoutOutlined } from '@mui/icons-material'

import Logo from '../../../PaginaPrincipal/assets/Logo.svg'
import './NavBar.css'

export const NavBar = ({ nombreUsuario, onLogOut }) => {
  return (
    <AppBar sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#4FA4D3'}}>
        <img className='NavBar-Logo' src={Logo} alt="Logo del colegio" />

        <div className='NavBar-ButonsContainer'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 4 }}>
                { nombreUsuario }
            </Typography>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={onLogOut}
                color="inherit"
            >
                <LogoutOutlined />
            </IconButton>
        </div>
    </AppBar>
  )
}
