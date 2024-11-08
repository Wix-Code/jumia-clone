import React from 'react'
import './banner.css'
import img1 from '../Banner/ban/ba1.png'
import img2 from '../Banner/ban/ba2.png'

const Banner = () => {
  const pics = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    }
  ]
  return (
    <div className='banner'>
      {
        pics.map((data) => {
          return (
            <div key={data.id} className="banner_item">
              <img src={data.img} alt="banner" />
            </div>
          )
        })
      }
    </div>
  )
}

export default Banner