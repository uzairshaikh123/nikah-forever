import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Features from '../Components/Features'
const MainRoutes = () => {
  return (
    <Routes>
<Route path='/features' element={<Features />}/>
{/* <Route path='/about' element={<About />}/>
<Route path='/contact' element={<Contact />}/>
<Route path='/skills' element={<Techskill />}/>
{/* <Route path='/resume' element={<Resume />}/> */}
{/* <Route path='/projects' element={<Projects />}/>  */}
    </Routes>
  )
}

export default MainRoutes