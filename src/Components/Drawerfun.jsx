import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,RadioGroup,Stack,Radio,Button,useDisclosure
  } from '@chakra-ui/react'
import {RxHamburgerMenu} from 'react-icons/rx'
// import '../Styles/navbar.css'
import { Link as ScrollLink } from 'react-scroll'
import React from 'react'

export default function Drawerfun() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  
    return (
      <>
        <Button mt={"10px"} onClick={onOpen}>
        <RxHamburgerMenu /> 
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px' backgroundImage='linear-gradient(to right, #ff6032, #ff5057)'>
            <img id='logo' src={"https://www.nikahforever.com/template_canvas/images/Logo-White.png"} alt="" />
            </DrawerHeader>
            <DrawerBody>
              {/* <div id='right'> */}

            <ul>
                <ScrollLink activeClass="active" to="footer" spy={true} smooth={true}>
                    <li style={{listStyle:"none",marginTop:"20px",fontSize:"20px"}} onClick={onClose}>Contact</li>
                </ScrollLink >
                <ScrollLink activeClass="active" to="footer" spy={true} smooth={true}>
                    <li style={{listStyle:"none",marginTop:"20px",fontSize:"20px"}} onClick={onClose}>Faq</li>
                </ScrollLink>
                    <Button style={{marginTop:"20px",fontSize:"20px",width:"100%"}}>Login</Button>
                </ul>
              {/* </div> */}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }