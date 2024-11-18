import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
  <Route path="/" element={<LogIn />} />
  <Route path="/home" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/products" element={<Products />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>

      </Router>
    </div>
  );
}

export default App;
