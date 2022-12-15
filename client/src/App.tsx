import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import MainMap from './component/MainMap/MainMap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<MainMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
