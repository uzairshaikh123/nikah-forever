import React, { Component } from "react";
import Slider from "react-slick";
import '../Styles/slider.css'
import SampleNextArrow from "./NextButton";
import SamplePrevArrow from "./PrevButton";

export default class SimpleSlider extends Component {
    
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      useCSS:true,
      className:"inner-div",
      prevArrow: <SamplePrevArrow className={"prevarrow"} />,
      nextArrow: <SampleNextArrow className={"nextarrow"}/>,
    };
    return (
      <div className="slider-cont">
        <Slider {...settings}>
          <div>
            <img src="https://www.nikahforever.com/assets/couple_2.jpg" alt="" />
            <img src="https://www.nikahforever.com/assets/stars.png" alt="" />
            <h3>-HASHIM & HIBA</h3>
            <p>As parents, we were looking for a trustworthy matrimonial company to help find a suitable match for our daughter. Nikah Forever exceeded our expectations with their personalized approach and understanding of our family's values</p>
          </div>
          <div>
            <img src="https://www.nikahforever.com/assets/couple_1.jpg" alt="" />
            <img src="https://www.nikahforever.com/assets/stars.png" alt="" />
            <h3>-YASIR & MARYAM</h3>
            <p>I found my soulmate through Nikah Forever and I couldn't be happier! The process was seamless and the team was extremely helpful in finding compatible matches. Thank you Nikah Forever for helping me find my life partner</p>
          </div>
          <div>
            <img src="https://www.nikahforever.com/assets/couple_3.jpg" alt="" />
            <img src="https://www.nikahforever.com/assets/stars.png" alt="" />
            <h3>-BILAL & AYESHA</h3>
            <p>I'm busy with work, so I didn't have much time to search for a partner. Nikah Forever made the process easy and stress-free. The team was kind and helpful, and they found someone who shares my values and goals. Thanks, Nikah Forever</p>
          </div>
          <div>
            <img src="https://www.nikahforever.com/assets/couple_5.jpg" alt="" />
            <img src="https://www.nikahforever.com/assets/stars.png" alt="" />
            <h3>-Ali & Zainab</h3>
            <p>Nikah Forever worked hard to find a suitable match for our son. They understood our values and preferences and did everything they could to help us find someone we liked. We're so grateful to them for helping our son find his life partner</p>
          </div>
        </Slider>
      </div>
    );
  }
}