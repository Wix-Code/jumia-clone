import React from 'react'
import './post.css'
import { Link } from 'react-router-dom'

const Post = ({dat}) => {
  return (
    <>
      <Link to={dat.path}>
        <div className='post'>
          <img src={dat.img} alt="" />
          <p>{dat.name}</p>
        </div>
      </Link>
    </>
  )
}

export default Post