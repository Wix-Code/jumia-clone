import React from 'react'
import './leftright.css'
import { CiDeliveryTruck } from 'react-icons/ci'

const Right = () => {
  return (
    <div className='right'>
      <div className="deliver">
        <p>Delivery & returns</p>
      </div>
      <div className="deliver">
        <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja.</p>
      </div>
      <div className="deliver">
        <h4>Choose your location</h4>
        <select name="states" >
          <option value="Imo">Imo</option>
          <option value="Abia">Abia</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Rivers">Rivers</option>
          <option value="Enugu">Enugu</option>
        </select>
        <select name="states" >
          <option value="Imo">Imo</option>
          <option value="Abia">Abia</option>
          <option value="Lagos">Lagos</option>
          <option value="Abuja">Abuja</option>
          <option value="Rivers">Rivers</option>
          <option value="Enugu">Enugu</option>
        </select>
      </div>
      <div className="deliver">
        <div className="pick">
          <div className="pickup">
            <CiDeliveryTruck className='cell' />
          </div>
          <div className="picks">
            <h5>Pickup Station</h5>
            <span>Arriving at pickup station between 15 August & 16 August when you order within next 1hrs 1mins</span>
          </div>
        </div>
        <div className="pick">
          <div className="pickup">
            <CiDeliveryTruck className='cell' />
          </div>
          <div className="picks">
            <h5>Pickup Station</h5>
            <span>Arriving at pickup station between 15 August & 16 August when you order within next 1hrs 1mins</span>
          </div>
        </div>
        <div className="pick">
          <div className="pickup">
            <CiDeliveryTruck className='cell' />
          </div>
          <div className="picks">
            <h5>Pickup Station</h5>
            <span>Arriving at pickup station between 15 August & 16 August when you order within next 1hrs 1mins</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Right