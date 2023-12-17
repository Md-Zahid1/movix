import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Movie from './pages/Movie'
import Portfolio from './pages/Portfolio'
import Page from './pages/Page'
import Blog from './pages/Blog'
import Login from './pages/Login'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/movie' element={<Movie/>}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/pages' element={<Page/>}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
