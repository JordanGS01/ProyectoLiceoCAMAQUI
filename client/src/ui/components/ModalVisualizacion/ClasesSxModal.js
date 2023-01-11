
//Clases del archivo ModalVisualizacion
export const stylesBoxModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius:"20px"
};

export const stylesTitleModal = {
    color: '#FFFFFF',
    backgroundColor:'#4FA4D3',
    p:2,
    pl:3
}

//Clases del archivo ModalVisualizacionForm
export const stylesInputForm = {
    borderRadius: '5px',
    p:1
}

export const stylesInputProps = { 
    backgroundColor: '#BAC8D0' 
}

export const stylesInputLabelProps = {
    fontSize: 20,
    fontWeight: 'bold'
}

//Clases del archivo ModalVisualizacionBotones
export const stylesBotonRegresarEnviar = {
    ':hover':{
        color:'blue', 
        bgcolor:'rgb(216, 216, 216)'
    }
}

export const stylesBotonEliminar = {
    ':hover':{
        color:'red', 
        bgcolor:'rgb(216, 216, 216)'
    }
}

export const stylesBotonModificar = {
    ':hover':{
        color:'green', 
        bgcolor:'rgb(216, 216, 216)'
    }
}
