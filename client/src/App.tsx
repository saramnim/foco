import React, { StrictMode } from 'react';
import './App.css';
import Header from './component/Header/Header';
// import Scrap from './component/Scrap/Scrap';
// import Detailmodal from './component/Detailmodal/Detailmodal';
import { GlobalStyle } from './GlobalStyle';
// import Dropdown from './component/DropDown/DropDown';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header></Header>
    </div>
  );
}

export default App;
