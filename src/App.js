import './App.css';
import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' exact Component={Home} />
        
      </Routes>
    </Router>

  );
  }
export default App;
