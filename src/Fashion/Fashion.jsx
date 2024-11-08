import React from 'react'
import './fashion.css'
import TopDeals from '../TopDeals/TopDeals'
import Clearance from '../Clearance/Clearance'
import Banner from '../Banner/Banner'
import Divide from '../Divide/Divide'

const Fashion = () => {
  return (
    <div className='fashion'>
      <TopDeals />
      <Banner />
      <Clearance />
      <Divide />
      <TopDeals />
      <div className="cat_desc">
        <p>Enjoy The Hottest Fashion at Jumia !</p>
        <p>Shop From Jumia Nigeria Fashion Festival Online</p>
        <span>Jumia Fashion is your gate for you can now enjoying the latest fashion and clothes whether its for women, men, or Kids clothes. Jumia provides you with a huge collection of shoes and clothes, including, soiree dresses, night dresses, men clothes, abaya styles and men shoes and much more. This is in addition to women bags and women shoes. So you can rest at your sofa at home and just navigate our website to check the images of our products along with the best prices in Nigeria. Moreover, we provide you with the best brands like Defacto, Adidas, Vejaro, Nike and many more.</span>
        <h3>Be Elegant and Shop on Jumia Nigeria!</h3>
        <span>Do you like to be always chic? The best thing you can do is to shop from Jumia fashion Nigeria. You can find your best shoe, clothes, and accessories. Starting with shoes, Jumia Nigeria provides you with sandals, sneakers, sports shoes, and boots with all types and prices. And there are no worries at all, as we have all sizes, so you can choose between the different colors and models easily. As for clothes, it is an issue for a lot of women, so we help you to find your perfect outfit. You can check the images with size chart to choose your favorite dress, pants, pullover, cardigan, and swimwear for hot summer, jackets for cold winter or even sportswear. If you are a new mom, and you do not have enough time to make shopping, you can shop on jumia maternity clothes and fins allow hat you want. You can also choose your preferable brand whether ot it Or, Danami, Nike or any other one.</span>
        <h3>Have a perfect Man Look with Jumia!
        </h3>
        <span>Be self-confident and have original clothes from reliable brands. Whether you are searching for t shirt, shirt, sweatshirt, pullover or accessories, you will find what you love on Jumia Nigeria. We have your classic shoes as well as sports shoes with all sizes. So get ready for the perfect look. Additionally, we deliver your orders and your door and you can exchange or return in some cases if you did not like what you bought or if it did not fit you.</span>
        <h3>Enjoy Top Deals and Discounts when Shopping on Jumia Nigeria Online Store
        </h3>
        <span>There are limitless offers and deals on the Jumia Nigeria online store. Enjoy up to 80% discount on selected items of the day during the flash sales. We also have Half Price Deals where our shoppers buy selected products like mobile phones, laptops, phone accessories, and clothing pieces for half the original price. Get the best prices you can find on the best deals page. </span>
        <span>Enjoy other weekly offers that run all year long, which means that every time you shop on the Jumia website, you are sure to enjoy mouth-watering discounts and deals that will help you save more and get the most affordable prices no one else can give you. To know more about these offers and deals, you can subscribe to our push notifications and newsletters, read our blog, and follow us on all our social media accounts.</span>
        <h3>Experience Fast Delivery and Online Shopping Convenience
        </h3>
        <span>Get your cart delivered to you within 24 hrs when you buy items with the Jumia Express tag, for selected products, you are also assured of free delivery and have your products delivered to you at no extra cost! Also, we have products that you can ship from abroad under the Jumia Global catalog. This means that you can order various items from outside the country and get them delivered to your doorstep without hassles. </span>
      </div>
    </div>
  )
}

export default Fashion