import { useState } from 'react'
import Home from "../src/pages/Home.page"
import Login from "../src/pages/login.page";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App
