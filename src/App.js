import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import { ShopContextProvider } from './Context/ShopContext'
import Footer from './Components/Footer/Footer'
import AboutUs from './Pages/AboutUs/AboutUs'
import Checkout from './Pages/Checkout/Checkout'
import FAQ from './Pages/FAQ/FAQ'
import Privacy from './Pages/Privacy/Privacy'

function App() {

  return (
    <div className='main'>
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/TechSpaceProject/' element={<Shop />}/>
          <Route path='/TechSpaceProject/cart' element = {<Cart />}/>
          <Route path = '/TechSpaceProject/aboutus' element = {<AboutUs/>}/>
          <Route path = '/TechSpaceProject/cart/checkout' element = {<Checkout />} />
          <Route path ='/TechSpaceProject/FAQ' element= {<FAQ />} />
          <Route path = '/TechSpaceProject/privacy' element = {<Privacy />}/>
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>

    </div>
  )
}

export default App
