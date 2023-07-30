import React from 'react'
import './hero.css'
import women from '../Assets/women.jpg'


const Hero = () => {
  return (
    <div className='profile'>
<div class="star"></div>

        <div className="left">
            <img className='women1' src={women} alt="" />
            <div className="right">
            <h1>Healthy Skin</h1>
            <h1>Wildly You</h1>
            <p className='para'>Nourish Skin with fan-favorite <p>SPF body products. Shop limited edition kits,special</p> launches and more, only available here.</p>
        </div>
        </div>
        
    </div>
  )
}

export default Hero