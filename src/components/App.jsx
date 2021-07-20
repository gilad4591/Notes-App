import React from 'react';
import Header from './partials/Header';
import Note from './Note';
import Footer from './partials/Footer';

import notes from '../notes';

// function createNote(
// }

function App(){
    return   <div> 

    <Header/>

    {notes.map(singleNote=>
     <Note
        key = {singleNote.key}
        id = {singleNote.id}
        title = {singleNote.title}
        content = {singleNote.content}
    />)}
     

     <Footer/>
    </div>;
}

export default App ;