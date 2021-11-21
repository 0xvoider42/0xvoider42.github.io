import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NewsPage from './components/pages/NewsPage';
import WeatherPage from './components/pages/WeatherPage';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/weather' element={<WeatherPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
