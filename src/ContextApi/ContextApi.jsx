import React, { createContext, useState } from 'react'
import { flash } from '../AllData';
import { useParams } from 'react-router-dom';

export const Context = createContext(null)

const ContextApi = (props) => {

  const [cart, setCart] = useState([]);
  const [cartProducts, setCartProducts] = useState(flash)

  const [adds, setAdds]=useState(false);


  
  const [cartButtons, setCartButtons] = useState(false);

  

  const addToCart = (product) => {
    const exist = cart.find((item) => { return item.id === product.id});
    if (exist) {
      alert('Already Added')
    } else {
      setCart([...cart, {...product,qty : 1}]);
      alert('Added to cart')
    }   
  }

  // increase cart product

  const increaseCart = (product) => {
    const exist = cart.find((item) =>{ 
    return item.id === product.id})
  
    setCart(cart.map((item) =>{ return item.id === product.id ? {...exist, qty : exist.qty + 1} : item}));
    
    console.log(product)
  }

  // decrease cart product

  const decreaseCart = (product) => {
    const exist = cart.find((item) =>{ return item.id === product.id})
    
    setCart(cart.map((item) =>{
      if (item.qty === 1) {
       //setCartButtons(false)
      } else{
        return item.id === product.id ? {...exist,qty : exist.qty - 1} : item
      }
    }))

    console.log(exist.qty)
  }

  const {id} = useParams();

  const product = flash.find((item) => item.id === parseInt(id));


  const value = {adds, product,decreaseCart, increaseCart, cartButtons, setCartButtons, cart, setAdds, cartProducts, addToCart}

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextApi