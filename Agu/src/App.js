import './App.css';
import Navbar from './Components/Navbar';
import HeroPage from './Components/HeroPage';
import Hero from './Components/Hero';
// import { BrowserRouter } from 'react-router-dom'

import React from 'react'

export default function App() {
  return (
    <>
    <Navbar />
    <HeroPage/>
    <Hero/>
    </>
  )
}
