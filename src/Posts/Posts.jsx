import React from 'react'
import './posts.css'


const Posts = ({flash}) => {
  return (
    <div className='posts'>
      <img src={flash.img} alt="" />
      <div className="posts_details">
        <p>{flash.desc.slice(0, 23)}...</p>
        <h4>{flash.Nprice}</h4>
        <span>{flash.Oprice}</span>
        <p className='p'>14 items left</p>
        <div className="post_div">
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Posts