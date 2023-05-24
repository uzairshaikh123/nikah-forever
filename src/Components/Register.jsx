import React from 'react'
import '../Styles/register.css'
import {Input,Button,Select} from '@chakra-ui/react'
const Register = () => {
  return (
    <div className='register-cont'>
      <div>
        <h1 style={{fontSize:"30px",textAlign:"center"}} >Register</h1>
        <hr style={{width:"20%",margin:"auto",fontWeight:500}} />
      <form action="">
        <label htmlFor="">Name</label>
        <Input type="text" placeholder='Enter Your Name' isRequired/>
        <label htmlFor="">Email</label>
        <Input type="text" placeholder='Enter Your Email' isRequired/>
        <label htmlFor="">Mobile No.</label>
        <Input type="number" placeholder='Enter Your Mobile No.' isRequired/>
        <label htmlFor="">Password</label>
        <Input type="password" placeholder='Enter Your Password' isRequired />
        <label  htmlFor="">Profile Create for</label>
        <Select placeholder='Choose One' isRequired>
          <option value="Self">Self</option>
          <option value="Daughter">Daughter</option>
          <option value="Brother">Brother</option>
          <option value="Sister">Sister</option>
          <option value="Relative/Friend">Relative/Friend</option>
          <option value="Son">Son</option>
        </Select>
        <Button type="submit"   display={"block"} margin={"auto"} width={"100%"} mt={"20px"}>Submit</Button>
      </form>
      </div>
    </div>
  )
}

export default Register