

import { Box, Typography, Modal } from '@mui/material';

import { ModalVisualizacionForm } from './ModalVisualizacionForm'
import { ModalVisualizacionBotones } from './ModalVisualizacionBotones'

import { useForm } from '../../../PlataformaVirtual/hooks/useForm'

import { stylesBoxModal, stylesTitleModal } from './ClasesSxModal'
import './ModalVisualizacion.css'


export const ModalVisualizacion = ({ open, handleClose, titulo, botonesActivos, funcionesBotones, idObj, tituloObj ,contenidoObj, onSubmitForm }) => {
    const { formState, onInputChange } = useForm({
        id: idObj,
        tituloF: tituloObj,
        contenido: contenidoObj
    })
    const { tituloF, contenido } = formState;


    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(formState);
    }


    return (
        <Modal
            open={open}
            aria-labelledby="Modal para modificar, ver, crear y eliminar contenido"
        >
            <Box sx={stylesBoxModal}>

                <Typography
                    id="modal-modal-title"
                    variant="h4" 
                    component="h2"
                    gutterBottom 
                    sx={stylesTitleModal}
                    className="ModalVisualizacion-Titulo"
                >
                    { titulo }
                </Typography>

                <form onSubmit={handleOnSubmit}>
                    <ModalVisualizacionForm
                        onInputChange={onInputChange}
                        titulo={tituloF}
                        contenido={contenido}
                    />

                    <ModalVisualizacionBotones 
                        activos={botonesActivos}
                        funcionesBotones={funcionesBotones}
                        onClose={handleClose}
                    />
                </form>

            </Box>
        </Modal>
    );
}
