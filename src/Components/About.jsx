import React from 'react'
import '../Styles/about.css'
import {Box} from '@chakra-ui/react'
const About = () => {
  return (
    <div className='about-cont-main'>
        <h3 id='about-head' style={{marginTop:"30px"}}>ABOUT US</h3>
        <h1>India’s #1 Muslim Matrimony Website</h1>
        <h3>Your Forever is our priority</h3>
        <Box className='about-cont' display={"flex"} flexWrap={{base:"wrap",sm:"Wrap",md:"wrap",xl:"wrap","2xl":"nowrap"}}>
            <div>
                <img src="https://www.nikahforever.com/template_canvas/images/slider/icon1.png" alt="" />
                <h2>879,200</h2>
                <h3>NO. OF MEMBERS</h3>
            </div>
            <div>
                <img src="https://www.nikahforever.com/template_canvas/images/slider/icon2.png" alt="" />
                <h2>39,120</h2>
                <h3>SUCCESSFUL STORIES</h3>
            </div>
            <div>
                <img src="https://www.nikahforever.com/template_canvas/images/slider/icon3.png" alt="" />
                <h2>5,000+</h2>
                <h3>CITIES PRESENCE</h3>
            </div>
        </Box>
    </div>
  )
}

export default About