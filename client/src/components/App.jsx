import React, {useState, useEffect} from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import axios from "axios";
import EditNote from './EditNote';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";




function App() {
    
  return (
    <Router>
    <Main/>
    <Footer/>
    </Router>
  );
}

function Main(){
  return(
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/editnote" component={EditNote} />
      {/* <Route exact path="/about" component={AboutPage} /> */}

    </Switch>
  );
}

export default App;
