import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BrowserRouter, Link, Router } from "react-router-dom";
import axios from "axios";


function EditNote(props){
    var {noteTitle, noteContent, noteId} = props.location.state;

    const [note, setNote] = useState({
        title: noteTitle,
        content:noteContent,
    }
        ); 
        function handleChange(event){
            const{name, value} = event.target;
            setNote(prevNote=>{
                return {...prevNote, [name]: value
                  };
                });
              }
                function saveEditedNote(){
                  axios.patch("/api/notes/:noteId", {  noteId: noteId, note: note }  ).then(props.history.push('/')).catch((err)=>console.log(err));

              }

                  
           return (
        <div> 
      <form className="create-note">
         <div> <input onChange={handleChange} name="title" value={note.title} placeholder="Title" autoComplete="off" required="required"/> <hr></hr></div>
        
        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" autoComplete="off" required="required"/>
            
        <Fab onClick={saveEditedNote}><SaveIcon/></Fab>
        <Link to={{pathname: "/"}}><Fab className="back-button"><ArrowBackIcon/></Fab></Link>
            
      
     
      </form>
        
        </div>
    );
}


export default EditNote;