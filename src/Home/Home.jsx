import React from 'react'
import './home.css'
import Advert from '../Advert/Advert'
import Collection from '../Collections/Collection'
import FlashSale from '../FlashSale/FlashSale'
import Banner from '../Banner/Banner'
import TopDeals from '../TopDeals/TopDeals'
import Clearance from '../Clearance/Clearance'
import Hero from '../Hero/Hero'
import AllAbout from '../AllAbout/AllAbout'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Advert />
      <FlashSale />
      <Banner />
      <Collection />
      <TopDeals />
      <Clearance />
      <AllAbout />
    </div>
  )
}

export default Home