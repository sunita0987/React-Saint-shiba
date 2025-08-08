import { useState } from 'react'
import React from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import HeroSection from './components/HeroSection'
import HowToBuy from './components/HowToBuy'


function App() {


  return (
    <>
   <NavBar/>
   <HeroSection/>
   <HowToBuy/>
    </>
  )
}

export default App
