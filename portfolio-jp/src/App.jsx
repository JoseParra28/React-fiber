import { useState } from 'react'
import './Styles/App.css'
import { Navbar } from './Components/Navbar'
import { HeroSection } from './Components/HeroSection'
import HeroModel from './Models/HeroModels'


function App() {

  return (
    <>
    <HeroModel/>
     <HeroSection/>
    </>
  )
}

export default App
