import React from 'react'
import '../Styles/navbar.css'
import {Button,Box} from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll'
import Drawerfun from './Drawerfun'
const Navbar = () => {
    return (
        <div id='navbar-container'>
            <div id='left'>
                <img id='logo' src={"https://www.nikahforever.com/template_canvas/images/Logo-White.png"} alt="" />
            </div>
            <Box id='right' display={{base:"none",sm:"none",md:"block",xl:"block","2xl":"block"}}>
                <ul>
                <ScrollLink activeClass="active" to="footer" spy={true} smooth={true}>
                    <li>Contact</li>
                </ScrollLink>
                    <li>Faq</li>
                    <Button>Login</Button>
                </ul>
            </Box>
            <Box display={{base:"block",sm:"block",md:"none",xl:"none","2xl":"none"}}>
            <Drawerfun />
            </Box>
        </div>
    )
}
// 
export default Navbar