import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BalloonPage from './BalloonPage';
import FormPage from './FormPage';
import Navbar from './Navbar.js';

const Master = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route  path="/" element={<BalloonPage/>} />
      <Route path="/form" element={<FormPage/>} />
      </Routes>
    </Router>
  );
};

export default Master;
