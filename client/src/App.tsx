import React, { StrictMode } from 'react';
import './App.css';
import Header from './component/Header/Header';
import MainMap from './component/MainMap/MainMap';
import Scrap from './component/Scrap/Scrap';
import Detailmodal from './component/Detailmodal/Detailmodal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

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
          <Route path="/scrap" element={<Scrap />} />
          <Route path="/detailModal" element={<Detailmodal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
