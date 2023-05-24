import React from 'react'
import '../Styles/features.css'
const Features = () => {
  return (
    <div className='features-div'>
        <h1 className='f-heading'>FEATURES</h1>
    <div className='features' id='feature-cont' >
        <div>
<img src="https://dot.la/media-library/matter-dating.jpg?id=26580302&width=2000&height=1500&quality=85&coordinates=326%2C0%2C0%2C0" alt="" />

        </div>
<div className='second-cont box'>
<h1 className='headings-features'>Audio</h1>
<p style={{padding:"25px"}}>Voice Messages: Users can send recorded voice messages to each other, allowing them to express themselves in a more personal and expressive manner. Voice messages can convey emotions, tone, and nuances that may be difficult to express through text alone.</p>
</div>
    </div>
    <div className='features' id='feature-cont'>
<div className='second-cont box'>
<h1 className='headings-features'>Video</h1>
<p style={{padding:"25px"}}>Real-time video communication: Users can engage in live video calls with their matches, allowing for face-to-face conversations and the ability to see each other in real-time.</p>
</div>
        <div>
<img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_940/https://hellotiger.io/wp-content/uploads/2023/01/phone-mockup_2023-min.png" alt="" />

        </div>
    </div>
    <div className='features' id='feature-cont'>
        <div>
                {/* https://cdni.trulymadly.com/tm-static-assets-production/web/app-image-3-large.webp */}
                {/* */}
<img src="https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/617ad77066fa553d08c0f0ed_5J0Vw08PIsvEQ0Lbd8EdUYH0RFt8IUCinqbmkDlsWQgkqeNFIBSFfn7Klxa4mwuNxf5d5cRyvgc-J6GBw7MjRtH-jbjoe_Mok-Fwpa_bjr-UOkgDycOOaEocOJ2fQrkL05Hj0K0f.png " alt="" />

        </div>
<div className='second-cont box'>
<h1 className='headings-features'>Unlimited Chat</h1>
<p style={{padding:"25px"}}>Instant Messaging: With unlimited chat, messages are delivered instantly, enabling real-time conversations between users. This feature enhances the overall user experience by facilitating quick responses and reducing the waiting time between messages, fostering a more dynamic and engaging conversation.</p>
</div>
    </div>
    </div>
  )
}

export default Features