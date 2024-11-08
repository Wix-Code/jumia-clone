import React, { useContext } from 'react'
import './topdeal.css'
import All from '../All/All'
import { FaAngleRight } from 'react-icons/fa'
import { Context } from '../ContextApi/ContextApi'

const TopDeals = () => {

  const {cartProducts} = useContext(Context)
  return (
    <div className='topdeals'>
      <div className="deal_h2">
        <h2>Top Deals</h2>
        <div className="see">
          <h4>See All</h4>
          <FaAngleRight />
        </div>
      </div>
      <div className="deals">
        {
          cartProducts.map((all) => {
            return (
            <All key={all.id} all={all}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default TopDeals