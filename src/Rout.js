import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Phone from './Phone/Phone'
import Appliance from './Appliance/Appliance'
import Fashion from './Fashion/Fashion'
import SinglePage from './SinglePage/SinglePage'
import Cart from './Cart/Cart'
import ScrollTop from './ScrollTop/ScrollTop'

const Rout = () => {
  return (
    <div>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/appliance" element={<Appliance />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/single/:id" element={<SinglePage />} />
      </Routes>
    </div>
  )
}

export default Rout