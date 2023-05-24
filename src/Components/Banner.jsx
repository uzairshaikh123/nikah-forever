import React from 'react'
import {Button} from '@chakra-ui/react'
import '../Styles/banner.css'
import { Link as ScrollLink } from 'react-scroll'

const Banner = () => {
  return (
    <div>
        
        <div className='down'>
        <ScrollLink activeClass="active" to="features-div" spy={true} smooth={true}>
          <img style={{cursor:"pointer"}} width={'100px'}  src={'https://www.nikahforever.com/template_canvas/images/slider/arrow_down.png'} alt="" />
            </ScrollLink>
        </div>
              
    </div>
  )
}

export default Banner