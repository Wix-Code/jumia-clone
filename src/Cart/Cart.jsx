import React, { useContext } from 'react'
import TopDeals from '../TopDeals/TopDeals'
import './cart.css'
import Empty from './CartPages/Empty'
import { Context } from '../ContextApi/ContextApi'
import CartItems from './CartPages/CartItems'

const Cart = () => {

  const {cart} = useContext(Context)
  return (
    <div className='cart'>
      { 
       cart.length === 0 ? 
        <Empty />
            :
        <CartItems />
      }
      <TopDeals />
    </div>
  )
}

export default Cart