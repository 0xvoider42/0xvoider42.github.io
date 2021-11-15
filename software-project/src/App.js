import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NewsPage from './components/pages/NewsPage';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
<<<<<<< HEAD
          <Route path='/news' element={<NewsPage />} />
=======
>>>>>>> 9eaabd8fee72ae88003931daa56c688890df701c
        </Routes>
      </Router>
    </>
  );
}

export default App;
