import React from 'react';
import NoteIcon from '@material-ui/icons/Note';
import { Link } from "react-router-dom";


function Header(){
    return <header> <h1><NoteIcon/>Notes</h1>   
       {/* <nav>
    <ul>
      <li><Link to="/">Notes</Link></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/editnote">Edit Note</Link></li>

    </ul>
  </nav> */}
  </header>;
}

export default Header;