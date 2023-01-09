import React from 'react'
import './ListaCursos.css'

export const ListaCursos = () => {

  const cursos = []

  const Mate = {
    name: 'Matematica'
  }

  cursos.push(Mate)
  cursos.push(Mate)
  cursos.push(Mate)
  cursos.push(Mate)
  cursos.push(Mate)
  cursos.push(Mate)




  return (
    <ul className='body'>
      {cursos.map((curso) => (
        <li style={{ margin: '2vh', color: '#0B92DC' }}>{curso.name}</li>
      ))}
    </ul>
  )
}
