import React from "react";
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

import {  Link } from "react-router-dom";





function Note(props) {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    if (event.target.innerHTML === "Yes"){
        props.deleteNote(props.id);
    }
    setOpen(false);
  };

      

  return (
    <div className="note">

      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab color="inherit" onClick = {()=>{
          handleClickOpen();
      }}>
      <DeleteIcon />
      </Fab>
<div className="color-delete">

      <Link to={{pathname: "editnote", state:{noteTitle: props.title, noteContent: props.content, noteId: props.id}}}><Fab color="inherit"><EditIcon/></Fab></Link>
</div>





      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Note"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are u sure you want to delete this note?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Note;
