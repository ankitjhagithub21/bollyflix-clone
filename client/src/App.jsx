import React from 'react'
import "./App.css"
import Navbar from './components/custom/Navbar'
import Footer from './components/custom/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <>
   <Navbar/>
   <Home/>
   <Footer/>
    </>
  )
}

export default App
