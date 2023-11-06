import { useState } from 'react'
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<p>Hi</p>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
