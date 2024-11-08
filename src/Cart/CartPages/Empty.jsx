import React from 'react'
import './cartpages.css'
import { Link } from 'react-router-dom'

const Empty = () => {
  return (
    <div className='empty'>
      <img src="https://www.jumia.com.ng/assets_he/images/cart.668e6453.svg" alt="" />
      <h3>Your cart is empty</h3>
      <p>Browse our categories and discover our best deals!</p>
      <Link to="/"><button>START SHOPPING</button></Link>
    </div>
  )
}

export default Empty