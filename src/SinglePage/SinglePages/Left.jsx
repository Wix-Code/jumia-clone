import React, { useContext, useState } from 'react'
import { FaMinus, FaPlus, FaRegStar, FaStar } from 'react-icons/fa'
import img1 from '../pics/t3.jpg'
import img3 from '../pics/t2.jpg'
import img4 from '../pics/t1.jpg'
import { Context } from '../../ContextApi/ContextApi'
import { useParams } from 'react-router-dom'
import { flash } from '../../AllData'


const Left = () => {

  const {addToCart,cart,cartButtons,setCartButtons,decreaseCart,increaseCart} = useContext(Context); 

  const {id} = useParams();

  const product = flash.find((item) => item.id === parseInt(id));

  
  //console.log(product.Nprice)

  const [state, setState] = useState(img1);
  
  const img = [
    img1, img3, img4
  ]

  const click = (i) =>{
    setState(i)
  }

  // increase cart product

  
  return (
    <div className='left' key={product.id}>
      <div className="left_first">
        <img src={product.img} alt="" />
        <div className="img_dis">
        {
          img.map((img) =>{
            return(
              <div className="ma" key={img}>
                <img onClick={()=>click(img)} src={img} key={img} alt="" />
              </div>
            )
          })
        }
        </div>
      </div>
      <div className="left_sec">
        <h3>Music Pioneer Bluetooth Headset P9 Wireless-Compatible With IOS&Android</h3>
        <div className="pioner">
          <span>Brand:</span>
          <p>Music Pioneer</p>
          <span>|</span>
          <p>Similar products from Music Pioneer</p>
        </div>
        <hr />
        <div className="price">
          <h2>{product.Nprice}</h2>
          <p>9,400</p>
          <span>-18%</span>
        </div>
        <span>In stock</span>
        <div className="ship">
        <span>+ shipping from <p>₦ 600</p> to <p>LEKKI-AJAH (SANGOTEDO)</p></span>
        </div>
        <div className="rate">
          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p>(1 verified rating)</p>
        </div>
        <div className="set_btn">
          {
            cart.map((item) => {
              return(
                <div className="maped">
                <button onClick={()=>decreaseCart(item)}><FaMinus /></button>
                <span>{item.qty}</span>
                <button onClick={()=>increaseCart(item)}><FaPlus /></button>
                <p>({item.qty} item(s) added)</p>    
                </div>
              )
            })
          }
        </div>
        <hr />
        <p>PROMOTIONS</p>
        <div className="promo">
          <FaRegStar className='fastar' />
          <p>Need extra money? Loan up to N500,000 on the JumiaPay Android app.
          </p>
        </div>
        <div className="promo">
          <FaRegStar className='fastar' />
          <p>Need extra money? Loan up to N500,000 on the JumiaPay Android app.
          </p>
        </div>
        <div className="promo">
          <FaRegStar className='fastar' />
          <p>Enjoy cheaper shipping fees when you select a PickUp Station at checkout.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Left