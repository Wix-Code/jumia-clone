import React from 'react'
import './all.css'
import { Link } from 'react-router-dom'

const All = ({all, id}) => {
  return (
    <Link to={`/single/${all.id}`}>
      <div className='all'>
        <img src={all.img} alt="" />
        <div className="all_details">
          <p>{all.desc.slice(0,24)}...</p>
          <h4>{all.Nprice}</h4>
          <span>{all.Oprice}</span>
        </div>
      </div>
    </Link>
  )
}

export default All