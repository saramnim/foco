import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import MainMap from './component/MainMap/MainMap';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainMap />} />
      </Routes>
    </div>
  );
}

export default App;
