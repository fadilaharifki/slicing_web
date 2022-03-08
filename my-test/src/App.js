import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './page/home';
import Footer from './components/footer';

export default function App() {
  return (
    <div className='bg-red-700/60'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}