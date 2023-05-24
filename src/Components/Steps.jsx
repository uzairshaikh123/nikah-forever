import React from 'react'
import '../Styles/steps.css'
import {Box} from '@chakra-ui/react'
const Steps = () => {
  return (
    <div className='steps-cont'>
        <h1>THREE SIMPLE STEPS TO FIND YOUR FOREVER</h1>
        <Box className='steps' flexWrap={{base:"wrap",sm:"wrap",md:"wrap",xl:"nowrap","2xl":"nowrap"}}>
            <div>

            <img width={'100px'} src="https://www.nikahforever.com/template_canvas/images/slider/register.png" alt="" />
            <h1 className='heading-steps'>01.REGISTER</h1>
            <h3>Free , Easy and Secure registration with Nikah Forever.</h3>
            </div>

            {/* <div>
            </div> */}
            <img className='arrows' src="https://www.nikahforever.com/arrow-red.jpg" alt="" />

            <div>

            <img width={'100px'} src="https://www.nikahforever.com/template_canvas/images/slider/search.png" alt="" />
            <h1 className='heading-steps'>2.SEARCH</h1>
            <h3>Search muslim matrimonial profiles from all over India & World with filtered options.</h3>
            </div>

            {/* <div>
            </div> */}
            <img className='arrows'  src="https://www.nikahforever.com/arrow-red.jpg" alt="" />

            <div>
            <img width={'100px'} src="https://www.nikahforever.com/template_canvas/images/slider/connect.png" alt="" />
            <h1 className='heading-steps'>03.CONNECT</h1>
            <h3>Connect with your forever one anytime anywhere on Nikah Forever.</h3>
            </div>
        </Box>
    </div>
  )
}

export default Steps