import React from 'react';
import './portfolioStyle.css';
import FoodApp from '../../../assets/images/foodApp.jpeg'
import OLX from '../../../assets/images/olx.png'

export const Portfolio = () => {
  return (
    <>
      <div className="container">
        <div className="portfolio">
          <div className="portfolio-heading">
            <h2>Portfolio</h2>
          </div>
          <div className='portfolio-body'>
            <div className='p-item'>
              <div className='foodApp-img'>
              <img src={FoodApp} alt="" className='food-img'/>
              </div>
              <div className='item-data'>
              <p>A UI For foodies app created using HTML, CSS, Bootstrap and JavaScript</p>
              </div>
            </div>
            <div className='p-item'>
              <div className='foodApp-img'>
              <img src={OLX} alt="" className='food-img'/>
              </div>
              <div className='item-data'>
              <p>A Clone of OLX created using React Js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
