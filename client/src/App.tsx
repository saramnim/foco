import React from 'react';
import './App.css';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Review from './component/Post/Post';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
