

import './ListaCursos.css'

import { useNavigate } from 'react-router-dom';


export const ListaCursos = () => {

  const cursos = []

  const navigate = useNavigate();

  const Mate = {
    name: 'Matematica'
  }

  const esp = {
    name: 'Español'
  }

  const soc = {
    name: 'Sociales'
  }

  const cien = {
    name: 'Ciencia'
  }

  cursos.push(Mate)
  cursos.push(esp)
  cursos.push(soc)
  cursos.push(cien)

  return (
    <ul className='body'>
      {cursos.map((curso) => (
        <li style={{ margin: '2vh', color: '#0B92DC', cursor:'pointer'}} onClick= {()=> navigate(`/menuCurso/${curso.name}`)} >{curso.name}</li>
      ))}
    </ul>
  )
} 
