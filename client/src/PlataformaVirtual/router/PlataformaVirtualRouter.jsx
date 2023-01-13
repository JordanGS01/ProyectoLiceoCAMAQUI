

import { Routes, Route, Navigate } from 'react-router-dom'
import { Admin } from '../pages/admin/Admin'
import { CartasAprendizaje } from '../pages/cartasAprendizaje/CartasAprendizaje'
import { Documentos } from '../pages/documentos/Documentos'
import { LogIn } from '../pages/login/LogIn'
import { MenuCurso } from '../pages/menuCurso/MenuCurso'
import { MenuInicial } from '../pages/menuInicial/MenuInicial'
import { SignIn } from '../pages/signIn/SignIn'


export const PlataformaVirtualRouter = () => {
  return (
    <>
      <Routes>
        <Route path='admin' element={<Admin />} />
        <Route path='cartasAprendizaje' element={<CartasAprendizaje />} />
        <Route path='documentos/:direccion' element={<Documentos />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/menuCurso/:id'  element={<MenuCurso />}/>
        <Route path='menuInicial' element={<MenuInicial />} />
        <Route path='signIn' element={<SignIn />} />
        <Route path='/' element={<Navigate to='/login' />} />
      </Routes>
    </>
  )
}
