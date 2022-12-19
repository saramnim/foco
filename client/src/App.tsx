import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import MainMap from './component/MainMap/MainMap';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Profile from './component/Account/Profile';
import Security from './component/Account/Security';
import Deactivate from './component/Account/Deactivate';
import Review from './component/Post/Post';
import Detailmodal from './component/Detailmodal/Detailmodal';
import Scrap from './component/Scrap/Scrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainMap />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/security" element={<Security />} />
        <Route path="account/deactivate" element={<Deactivate />} />
        <Route path="/review" element={<Review />} />
        <Route path="/scrap" element={<Scrap />} />
        <Route path="/detailModal" element={<Detailmodal />} />
      </Routes>
    </div>
  );
}

export default App;
