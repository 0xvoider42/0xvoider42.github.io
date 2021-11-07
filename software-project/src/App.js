import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
