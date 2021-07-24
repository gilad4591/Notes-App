import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';




function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content:""}
    );
    const [isExpanded, setExpanded] = useState(false);
    const [rowsNumber, setRowsNumber] = useState(1);
  function handleChange(event){
    const{name, value} = event.target;
    setNote(prevNote=>{
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event){
    event.preventDefault();
    if (note.title.length>0 && note.content.length > 0){
    props.addNote(note);
    setNote({title:"", content: ""});
    }
    else{
      console.log(event);
    }
  }

  function expand(){
    setExpanded(true);
    setRowsNumber(3);
  }
         
  return (
    <div>
      <form className="create-note">
        {isExpanded && <div> <input onChange={handleChange} name="title" value={note.title} placeholder="Title" autoComplete="off" required="required"/> <hr></hr></div>}
        
        <textarea onChange={handleChange} onClick={expand} name="content" value={note.content} placeholder="Take a note..." rows={rowsNumber} autoComplete="off" />
    {isExpanded &&<Zoom in= {true}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
      </Zoom> } 
      </form>
    </div>
  );
  }
export default CreateArea;
