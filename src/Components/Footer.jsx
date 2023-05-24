import React from 'react'
import '../Styles/footer.css'
const Footer = () => {
  return (
    <div>

    <div id='footer' >
<div>
    <img src="https://www.nikahforever.com/template_canvas/images/Logo-White.png" alt="" />
    <p>We, at Nikah Forever, are committed towards helping you find the one for whom you are destined to spend the rest of your lives. Our goal is to shape muslim matrimony into a journey of compassion and trust for you</p>
    <p>Being a muslim matrimony site , we tend to concerns about Muslim brothers & sisters.</p>
</div>
<div>
    <h1>Social</h1>
    <div style={{display:"flex",gap:"20px"}}>

    <img width={'60px'} src="https://img.icons8.com/?size=512&id=60440&format=png" alt="" />
    {/* <img style={{background:"transparent"}} src="https://png.pngtree.com/element_our/sm/20180520/sm_5b01251200ff5.png" alt="" /> */}
    <img width={'60px'} src="https://img.icons8.com/?size=512&id=RhYNENh5cxlS&format=png" alt="" />
    </div>
</div>
<div>
<h1>Get Started</h1>
    <img  style={{borderRadius:"20px"}} src="https://www.nikahforever.com/playandapp.png" alt="" />
</div>
    </div>
    <div  style={{margin:"0px",backgroundColor:"#ff6032"}}>
        <div style={{borderTop:"4px solid white",color:"white",fontSize:"20px",fontWeight:"500",width:"90%",margin:"auto"}}>
            <p style={{color:"white",fontSize:"20px",fontWeight:"500",textAlign:"center",marginTop:"25px"}}>Home | About | Contact | Careers | Blog  | Faq | Plans | Privacy Policy | Terms & Conditions</p>
        </div>
    </div>
    </div>
  )
}

export default Footer