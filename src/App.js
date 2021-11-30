import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import PortfolioPage from './components/pages/PortfolioPage';
import NewsPage from './components/pages/NewsPage.js';
import WeatherPage from './components/pages/WeatherPage.js';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/weather' element={<WeatherPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
