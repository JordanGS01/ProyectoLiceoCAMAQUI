

import { Modal, Box } from "@mui/material"

import { FormAddProfessor } from './'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    border: '1px solid grey',
    background: '#4FA4D3',
    borderRadius:"20px"
};


export const ModalAddProfesor = ({ open, onCloseModal }) => {
  return (
    <Modal
        open = { open }
        aria-labelledby="Agregar profesor"
        aria-describedby="Formulario para agregar profesor"
    >
        <Box 
            sx={{ ...style, width: 400 }}
        >
            <FormAddProfessor onCloseModal={onCloseModal} />
        </Box>
    </Modal>
  )
}
