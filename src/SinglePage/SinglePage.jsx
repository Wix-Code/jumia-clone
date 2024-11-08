import React from 'react'
import Main from './SinglePages/Main'
import './singlepage.css'
import TopDeals from '../TopDeals/TopDeals'


const SinglePage = () => {
  return (
    <div className='single'>
      <Main />
      <TopDeals />
    </div>
  )
}

export default SinglePage