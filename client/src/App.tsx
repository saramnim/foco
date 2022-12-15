import React, { StrictMode } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Scrap from './component/Scrap/Scrap';
import Detailmodal from './component/Detailmodal/Detailmodal';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
      <Scrap></Scrap>
      {/* <Detailmodal></Detailmodal> */}
    </div>
  );
}

export default App;
