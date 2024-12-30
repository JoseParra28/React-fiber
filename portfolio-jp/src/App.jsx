import { useState } from 'react'
import './Styles/App.css'
import { Navbar } from './Components/Navbar'
import { HeroSection } from './Components/HeroSection'
import HeroModel from './Models/HeroModels'
import AboutContent from './Components/AboutContent'
import { Card } from './Components/Card'
import { MyModel } from './Models/MyModel'
import Contact from './Components/Contact'



function App() {

  return (
    <>
    {/* <Navbar/> */}
     {/* <HeroSection/> */}
    {/* <AboutContent/> */}
    <Card/>
    <Contact/>
    {/* <MyModel/> */}
    </>
  )
}

export default App
