import React from 'react'
import img from '../Collections/collect/Electronic.jpg'
import img1 from '../Collections/collect/Computing.jpg'
import img2 from '../Collections/collect/Beauty.jpg'
import img3 from '../Collections/collect/Fashion.jpg'
import img4 from '../Collections/collect/Gaming.jpg'
import img5 from '../Collections/collect/home.png'
import img6 from '../Collections/collect/Supermarket.jpg'
import img7 from '../Collections/collect/co.jpg'
import img8 from '../Collections/collect/Power_Deals.jpg'
import img9 from '../Collections/collect/Phones.jpg'
import img10 from '../Collections/collect/Kids_Corner.jpg'
import img11 from '../Collections/collect/Mobile_Accessories.jpg'
import Post from '../Post/Post'
import './collection.css'

const Collection = () => {

  const data = [
    {
      id: 1,
      img: img,
      name: "Electronics"
    },
    {
      id: 2,
      img: img1,
      name: "Computing"
    },
    {
      id: 3,
      img: img2,
      name: "Beauty"
    },
    {
      id: 4,
      path: "/fashion",
      img: img3,
      name: "Fashion"
    },
    {
      id: 5,
      img: img4,
      name: "Gaming"
    },
    {
      id: 6,
      img: img5,
      name: "Home"
    },
    {
      id: 7,
      img: img6,
      name: "Supermarket"
    },
    {
      id: 8,
      img: img7,
      name: "Appliances"
    },
    {
      id: 9,
      img: img8,
      name: "Power Deals"
    },
    {
      id: 10,
      img: img9,
      name: "Phones"
    },
    {
      id: 11,
      img: img10,
      name: "Kids Corner"
    },
    {
      id: 12,
      img: img11,
      name: "Mobile"
    },
  ]
  return (
    <div className="collected">
      <h2>Shop From Our Collections</h2>
      <div className='collection'>
      {
        data.map((dat, i)=>{
          return (
            <Post key={i} dat={dat}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default Collection