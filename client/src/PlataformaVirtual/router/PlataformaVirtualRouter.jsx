

import { Routes, Route, Navigate } from 'react-router-dom'
import { Admin } from '../pages/admin/Admin'
import { Apuntes } from '../pages/menuInicial/components/Apuntes/Apuntes'
import { CartasAprendizaje } from '../pages/cartasAprendizaje/CartasAprendizaje'
import { Documentos } from '../pages/documentos/Documentos'
import { LogIn } from '../pages/login/LogIn'
import { MenuCurso } from '../pages/menuCurso/MenuCurso'
import { MenuInicial } from '../pages/menuInicial/MenuInicial'
import { SignIn } from '../pages/signIn/SignIn'

import { Link } from 'react-router-dom'

export const PlataformaVirtualRouter = () => {
  return (
    <>
      <Routes>
        <Route path='admin' element={<Admin />} />
        <Route path='apuntes' element={<Apuntes />} />
        <Route path='cartasAprendizaje' element={<CartasAprendizaje />} />
        <Route path='documentos' element={<Documentos />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/menuCurso/:direccion'  element={<MenuCurso />}/>
        <Route path='menuInicial' element={<MenuInicial />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </>
  )
}
