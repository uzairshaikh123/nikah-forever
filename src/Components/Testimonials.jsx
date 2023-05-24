import React from 'react'
// import Slider from "react-slick";
import '../Styles/testimonials.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './Slider-Comp';

const Testimonials = () => {

  return (
    <div className='testimonials-cont'>
        <h1 className='heading-testimonials'>Find your Forever one <span id='dark-heading'>Get Started</span></h1>
        <div>
            <h1 id='what'>WHAT PEOPLE ARE SAYING</h1>
            <span>     </span>
        </div>
        <div className='testimonials'>
        <SimpleSlider/>
        </div>
     </div>
  )
}

export default Testimonials