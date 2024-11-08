import React, { useContext } from 'react'
import { Context } from '../../ContextApi/ContextApi'


const CartItems = () => {
  const {cart} = useContext(Context)

  console.log(cart)
  return (
    <div>
      {
        cart.map((item)=>{
          return (
          <div className="cart_items">
            <img src={item.img} alt="" />
            <p>{item.qty}</p>
          </div>
          )
        })
      }
    </div>
  )
}

export default CartItems