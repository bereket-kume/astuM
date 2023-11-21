import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import Home from './home';
import './app.css'
const App = () => {
  return (
    <>
    <div className=' container mt-3 custom-card'>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
};

export default App;
