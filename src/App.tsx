import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Register from "./components/Register";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Crat";
import Navbar from "./components/Navbar";
import {  UserProvider } from "./context/userContext";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <UserProvider>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
            </UserProvider>
        </div>
    );
}

export default App;
