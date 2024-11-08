import React from 'react'
import './addtocart.css'
//import { Context } from '../ContextApi/ContextApi'

const AddToCart = ({add}) => {

  return (
    <div className='add'>
      <img src={add.img} alt="" />
      <div className="add_to">
        <p>{add.desc.slice(0, 23)}...</p>
        <h4>{add.Nprice}</h4>
        <div className="span">
          <span>{add.Oprice}</span>
          <span className='pan'>-10%</span>
        </div>      
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default AddToCart