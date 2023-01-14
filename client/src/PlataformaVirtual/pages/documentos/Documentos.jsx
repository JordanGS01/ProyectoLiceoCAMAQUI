
import { NavBar } from "../../../ui"

import { Box } from "@mui/system"


import { Breadcrums } from "../../../ui/Breadcrums/Breadcrums";

import { useParams } from "react-router-dom";

import FolderIcon from '@mui/icons-material/Folder';

import ArticleIcon from '@mui/icons-material/Article';

import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const Documentos = () => {

  const { id, nombre } = useParams()
  const lista = []

  const nombreCarpeta = 'Tareas'

  const urlCarpeta = `/documentos/${id}/${nombre}`

  lista.push('Menú Principal')
  lista.push(nombre)
  lista.push('Documentos')


  const documentos = []

  documentos.push('Documento 1')
  documentos.push('Documento 2')
  documentos.push('Documento 3')
  documentos.push('Documento 4')
  documentos.push('Documento 5')

  const carpetas = []


  carpetas.push('Carpeta 1')
  carpetas.push('Carpeta 2')
  carpetas.push('Carpeta 3')
  carpetas.push('Carpeta 4')
  carpetas.push('Carpeta 5')




  return (
    <>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ width: '80%' }} >
          <Breadcrums ruta={lista} direccion='Documentos' />
        </Box>
      </Box>

      <Box sx={{ background: '', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ width: '80%', background: '', border: 'solid', borderColor: '#0B92DC', height: '70vh', overflowY: 'auto' }}  >

          {carpetas.map((carp) => (<Box sx={{ width: '97%', background: '#E3E2E2', margin: '2vh', borderRadius: '5px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '1vh' }}>
              <FolderIcon sx={{ color: '  rgb(7, 86, 114)' }} /> <h7 style={{ color: '#0B92DC', marginLeft: '1vh' }}>{carp}</h7>
            </Box>
          </Box>))}

          {documentos.map((doc) => (<Box sx={{ width: '97%', background: '#E3E2E2', margin: '2vh', borderRadius: '5px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '1vh' }}>
              <ArticleIcon sx={{ color: '  rgb(7, 86, 114)' }} /><h7 style={{ color: '#0B92DC', marginLeft: '1vh' }}>{doc}</h7>
              <FileDownloadIcon sx={{ color: '  rgb(7, 86, 114)', marginLeft:'auto' }} />
            </Box>
          </Box>))}

        </Box>
      </Box>
    </>
  )
}
