import React from 'react'
import './advert.css'

const Advert = () => {

  const pics = [
    {
      id: 1,
      img: "./gif/1.gif",
    },
    {
      id: 2,
      img: "./gif/2.gif",
    },
    {
      id: 3,
      img: "./gif/3.gif",
    },
  ]
  return (
    <div className='advert'>
      {
        pics.map((data)=>{
          return (
            <div key={data.id} className="advert_item">
              <img src={data.img} alt="advert"/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Advert