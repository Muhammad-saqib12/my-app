import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contactus' element={<ContactUs/>}/>
       
      </Routes>
    </Router>
  )
}

export default App