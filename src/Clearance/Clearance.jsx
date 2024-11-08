import React, { useContext } from 'react'
import img from './clear/cl5.jpg'
import img1 from './clear/cl.jpg'
import img2 from './clear/cl1.jpg'
import img3 from './clear/cl2.jpg'
import img4 from './clear/cl3.jpg'
import img5 from './clear/cl4.jpg'
import All from '../All/All'
import { FaAngleRight } from 'react-icons/fa'
import { Context } from '../ContextApi/ContextApi'

const Clearance = () => {

  const {cartProducts} = useContext(Context);

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
          cartProducts.map((all, i) => {
            return (
            <All key={i} all={all}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Clearance