import React from 'react'
import Left from './Left';
import { useParams } from 'react-router-dom';
import { flash } from '../../AllData';

const LeftSingle = () => {

 
  return (
    <div className='left'>
      <Left product={product} key={product.id} />
    </div>
  )
}

export default LeftSingle