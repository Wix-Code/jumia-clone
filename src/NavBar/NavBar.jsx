import React, { useState } from 'react'
import { IoIosArrowDown, IoMdHelpCircleOutline } from 'react-icons/io'
import './navbar.css'
import { BsCart3 } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { RiHome2Line } from 'react-icons/ri'

const NavBar = () => {

  const [account, setAccount] = useState(false)
  return (
    <div className='navbar'>
      <div className="nav">
        <Link to='/'><h1>JUMIA</h1></Link>
        <div className="nav_search">
          <div className="nav_input">
            <input type="text" />
          </div>
          <button>Search</button>
        </div>
        <div className="nav_account">
          <div className="account" onClick={()=>setAccount(!account)}>
            <BiUserCircle className='icon'/>
            <h4>Account</h4>
            <IoIosArrowDown />
          </div>
          {
            account && 
            <div className="acc">
              <button>Sign in</button>
              <hr />
              <div className="order">
                <MdOutlineAccountCircle className='or' />
                <p>My acccount</p>
              </div>
              <div className="order">
                <RiHome2Line className='or' />
                <p>Orders</p>
              </div>
              <div className="order">
                <FaRegHeart className='or' />
                <p>Saved</p>
              </div>
            </div>
          }
          <div className="account">
            <IoMdHelpCircleOutline className='icon' />
            <h4>Help</h4>
            <IoIosArrowDown />
          </div>
          <Link to='/cart'>
            <div className="account"> 
              <BsCart3 className='icon'/>
              <h4>Cart</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar