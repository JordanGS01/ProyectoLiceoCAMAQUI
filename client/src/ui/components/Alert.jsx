

import { Button, Dialog, DialogActions,
         DialogContent, DialogContentText,
         DialogTitle } from '@mui/material'

export const Alert = ({
    open, handleClose, title, content, 
    acceptButtonText, acceptButtonFunction, closeButtonText,
    closeButtonFunction, oneButton }) => {
  
    return (
    <Dialog
        open={ open }
        onClose={ handleClose }
        aria-labelledby={ title }
        aria-describedby="alert-dialog-description"
    >

        <DialogTitle id="alert-dialog-title">
            { title }
        </DialogTitle>

        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                { content }
            </DialogContentText>
        </DialogContent>

        <DialogActions>
            { oneButton 
                ? <></>
                :
                <Button onClick={ closeButtonFunction } >
                    { closeButtonText }
                </Button>
            }
            
            
            <Button onClick={ acceptButtonFunction } autoFocus>
                { acceptButtonText }
            </Button>
        </DialogActions>

    </Dialog>
  )
}
