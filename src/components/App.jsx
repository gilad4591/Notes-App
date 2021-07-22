import React, {useState} from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [Notes, setNotes] = useState ([]);

    function addNote(newNote){
        setNotes(prevNotes=>([...prevNotes,newNote]));
    }

    function deleteNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((Note,index) => {
              return index !==id;
            });
        })

    }
  return (
    <div>
      <Header />
      <CreateArea 
          addNote={addNote}
      />
      {Notes.map((Note,index)=>(
      <Note 
          title={Note.title}
          content={Note.content}
          key={index}
          id={index}
          deleteNote={deleteNote}
      />
      ))}
      <Footer />
    </div>
  );
}

export default App;
