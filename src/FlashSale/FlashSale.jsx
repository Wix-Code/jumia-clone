import React from 'react'
import './flashsale.css'
import img from '../FlashSale/item/1.jpg'
import img1 from '../FlashSale/item/1 (1).jpg'
import img2 from '../FlashSale/item/1 (2).jpg'
import img3 from '../FlashSale/item/1 (3).jpg'
import Posts from '../Posts/Posts'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const FlashSale = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

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
    <div className='flash'>
      <div className="flash_sale">
        {
          flash.map((flash, i)=>{
            return(
              <Posts settings={settings} Slider={Slider} key={i} flash={flash} />
            )
          })
        }
      </div>
    </div>
  )
}

export default FlashSale