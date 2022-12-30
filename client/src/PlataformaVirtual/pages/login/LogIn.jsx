

import Container from '@mui/material/Container';
import { FormLogin } from './components'

import './LogIn.css'

export const LogIn = () => {
  return (
    <Container maxWidth="sm" sx={{ background: '#E8E7E7' }}>
      <FormLogin />
    </Container>
  )
}
