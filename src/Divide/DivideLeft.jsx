import React from 'react'

const DivideLeft = () => {
  return (
    <div className='divide_left'>
      <div className="divi">
        <p>CATEGORY</p>
        <div className="divine">
          <p>Fashion</p>
        </div>
      </div>
      <hr />
      <div className="divi">
        <p>DISCOUNT PERCENTAGE</p>
        <div className="divine">
          <input type="radio"  />
          <p>50% or more</p>
        </div>
        <div className="divine">
          <input type="radio"  />
          <p>40% or more</p>
        </div>
        <div className="divine">
          <input type="radio"  />
          <p>30% or more</p>
        </div>
        <div className="divine">
          <input type="radio"  />
          <p>20% or more</p>
        </div>
        <div className="divine">
          <input type="radio"  />
          <p>10% or more</p>
        </div>
      </div>
      <hr />
      <div className="divi">
        <p>SELLER SCORE</p>
        <div className="divine">
          <input type="radio"  />
          <p>80% or more</p>
        </div>
        <div className="divine">
          <input type="radio"  />
          <p>60% or more</p>
        </div>
        <div className="divine">
          <input type="radio"  />
          <p>40% or more</p>
        </div>
        <div className="divine">
          <input type="radio"  />
          <p>20% or more</p>
        </div>
      </div>
      <hr />
      <div className="divi">
        <p>EXPRESS DELIVERY</p>
        <div className="divine">
          <input type="checkbox"  />
          <p>JUMIA EXPRESS</p>
        </div>
      </div>
      <hr />
      <div className="divi">
        <p>SHIPPED FROM</p>
        <div className="divine">
          <input type="checkbox"  />
          <p>Shipped from abroad</p>
        </div>
        <div className="divine">
          <input type="checkbox"  />
          <p>Shipped from Nigeria</p>
        </div>
      </div>
      <hr />
      <div className="divi">
        <p>OFFICIAL STORES</p>
        <div className="divine">
          <input type="checkbox"  />
          <p>Only Official Store</p>
        </div>
      </div>
      <hr />
      <div className="divi">
        <p>COLOR</p>
        <div className="divine">
          <input type="checkbox"  />
          <p>Black</p>
        </div>
        <div className="divine">
          <input type="checkbox"  />
          <p>Brown</p>
        </div>
        <div className="divine">
          <input type="checkbox"  />
          <p>White</p>
        </div>
        <div className="divine">
          <input type="checkbox"  />
          <p>Pink</p>
        </div>
        <div className="divine">
          <input type="checkbox"  />
          <p>Blue</p>
        </div>
      </div>
    </div>
  )
}

export default DivideLeft