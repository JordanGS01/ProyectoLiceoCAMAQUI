

import { FormSignin } from './components'

import './Signin.css'

//TODO: VERIFICAR SI EL USUARIO ESTA CONECTADO
//SI LO ESTA, SE REDIRECCIONA AL MENU PRINCIPAL
export const SignIn = () => {
  return (
    <div className='SignIn-Container'>
      <FormSignin />
    </div>
  )
}
