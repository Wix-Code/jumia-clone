import React from 'react'
import AddToCart from '../AddToCart/AddToCart'
import img from '../FlashSale/item/1.jpg'
import img1 from '../FlashSale/item/1 (1).jpg'
import img2 from '../FlashSale/item/1 (2).jpg'
import img3 from '../FlashSale/item/1 (3).jpg'

const Fash = () => {
  const flash = [
    {
      id: 1,
      img: img,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 2,
      img: img1,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 3,
      img: img2,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 4,
      img: img3,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 5,
      img: img,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 6,
      img: img,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 1,
      img: img,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 2,
      img: img1,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 3,
      img: img2,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 4,
      img: img3,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 5,
      img: img,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
    {
      id: 6,
      img: img,
      desc: 'Ace Elec 20000 MAh Ultra Slim Portable Power Bank',
      Nprice: 8500,
      Oprice: 15000
    },
  ]
  return (
    <div className="fashon">
      <div className="filter">
        <h2>Fashion</h2>
        <p>Sort by</p>
      </div>
      <hr />
      <div className='fash'>
        {
          flash.map((add, i)=>{
            return(
              <AddToCart key={i} add={add}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Fash