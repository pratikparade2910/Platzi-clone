

import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Loginpage from './pages/loginpage'
import ProtectedRoute from './components/protectroutes'
import { useState } from 'react'
import Details from './pages/details'

function App() {
  const [cart, setcart] = useState([])

  return (
    <>

      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Loginpage></Loginpage>}></Route>
          <Route path='/home' element={
            <ProtectedRoute>
              <Home cart={cart} setcart={setcart} />
            </ProtectedRoute>


          }></Route>
          <Route path='/cart' element={
            <ProtectedRoute>
              <Cart cart={cart} setcart={setcart} />
            </ProtectedRoute>
          }></Route>
          <Route path='/details/:id' element={<Details />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
