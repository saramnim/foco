import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
    </div>
  );
}

export default App;
