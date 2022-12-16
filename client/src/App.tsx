import React, { StrictMode } from 'react';
import './App.css';
import Header from './component/Header/Header';
import MainMap from './component/MainMap/MainMap';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Review from './component/Post/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<MainMap />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
