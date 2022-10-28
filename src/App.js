import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header/Header';
import Body from './Components/Content/Body';


function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}

export default App;
