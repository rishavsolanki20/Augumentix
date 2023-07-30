import React from 'react'
import './heroPage.css'
import imageLeft from '../Assets/cos1.jpg'
import imageRight from '../Assets/cos1.jpg'
import women from '../Assets/girl.png'

const HeroPage = () => {
    return (
      <div>
        <div>
            <h1 className="top">Beyond</h1>
            <img className="image-right" src={imageRight}  alt="Image right" />
            <img className="image-left" src={imageRight}  alt="Image left" />
            <h1 className="bottom">Elegance</h1>
        </div>
            <h1 className='cover'>
                Elegance
            </h1>
        <img className="women" src={women}  alt="Image left" />
      </div>
    )
  }
  
  export default HeroPage
  