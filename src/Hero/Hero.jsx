import React from 'react'
import './hero.css'
import img from './heroPic/shop_earn.png'
import img1 from './heroPic/712_X_384_jpay.png'
import { IoIosPhonePortrait } from 'react-icons/io'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero1">
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Mobile</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Kids Corner</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Power Deals</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Gaming</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Appliances</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Electronics</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Supermarket</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Fashion</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Fashion</p>
        </div>
        <div className="side">
          <IoIosPhonePortrait className='sid'/>
          <p>Fashion</p>
        </div>
      </div>
      <div className="hero2">
        <img src={img1} alt="" />
      </div>
      <div className="hero3">
        <div className="her">
          <img src={img} alt="" />
        </div>
        <div className="here">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero