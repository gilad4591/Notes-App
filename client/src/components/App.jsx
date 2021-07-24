import React, {useState, useEffect} from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";




function App() {
    const [notes, setNotes] = useState ([]);


    useEffect(() => {
      axios.get("/api/notes")
        .then((res) => setNotes(res.data))
        .catch((err) => console.error(err));
    },);

    function addNote(newNote){
      axios.post("/api/notes/add", newNote)
      .then((res) => setNotes([...notes, res.data]))
      .catch((err) => console.log(err));
      
    }
    

    function deleteNote(id){
        console.log(id);
      axios.delete("/api/notes/delete/:noteId", { data: { noteId: id } }).then((res)=>setNotes([res.data])).catch((err)=>console.log(err));
  }
  return (
    <div>
      <Header />
      <CreateArea 
          addNote={addNote}
      />
      {notes.map((note)=>(
      <Note 
          title={note.title}
          content={note.content}
          key={note._id}
          id={note._id}
          deleteNote={deleteNote}
      />
      ))}
      <Footer />
    </div>
  );
}

export default App;
