import { useState } from 'react'
import './App.css'
import video from '../src/assets/bgvideo.mp4'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Features from './Components/Features'
import Download_banner from './Components/Download_banner'
import Steps from './Components/Steps'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import Featured from './Components/Featured'
import Footer from './Components/Footer'
import Why from './Components/Why'
import Register from './Components/Register'
import {Box} from '@chakra-ui/react'
function App() {
 
// https://nikah-forever-uzairmd073-gmailcom.vercel.app/
  return (
    <Box flexWrap={{base:"wrap",sm:"wrap",md:"nowrap",xl:"nowrap","2xl":"nowrap"}}>
      <video autoPlay loop muted  id='video'>
        <source src={`${video}`} type='video/mp4' />
      </video>
      <Navbar/>
      <Register/>
      <Banner/>
      <Features/>
      <About/>
      <Steps/>
      <Download_banner/>
      <Testimonials/>
      <Featured/>
      <Why/>
      <Footer/>
    </Box>
  )
}

export default App
