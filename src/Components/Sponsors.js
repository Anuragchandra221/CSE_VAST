import React, { useEffect } from 'react'
import asianet from "../Assets/Images/sponsors/Asianet Fiber-Internet partner.png"
import fm from '../Assets/Images/sponsors/Club FM 104.8 - radio partner.png'
import geek from "../Assets/Images/sponsors/GEEKBOZ-BRAND-logo-2-copy.png"
import akef from "../Assets/Images/sponsors/AKEF-LOGO-WHITE (1).png"
import "./Sponsors.css"
import manifold from "../Assets/Images/sponsors/LOGO- Empanelled by Govt. Of Kerala star.jpeg"
import zohi from "../Assets/Images/sponsors/zowie.png"
import white from "../Assets/Images/sponsors/whitehoouse.png"

function Sponsors() {
  return (
    <div className='sponsor-div mb-5 hidden'>
        <h2 className='event-head text-center text-lg-left mb-4 pl-2 pl-lg-0' style={{wordSpacing: "0.1em"}}>WE ARE FUELED BY</h2>
        <div className='sponsorship'>
            <div className='slides d-flex align-items-center'>
                <img className='mx-4 mx-lg-4 slide-img' src={asianet}/> 
                <img className='mx-4 mx-lg-4 slide-img' src={fm}/>
                <img className='mx-4 mx-lg-4 slide-img' src={geek}/>
                <img className='mx-4 mx-lg-4 slide-img' src={akef}/>
                <img className='mx-4 mx-lg-4 slide-img' src={manifold}/>
                <img className='mx-4 mx-lg-4 slide-img' src={zohi}/>
                <img className='mx-4 mx-lg-4 slide-img' src={white}/>
                {/* <img className='mx-3 slide-img' src={akef}/> */}
            </div>
            <div className='slides d-flex align-items-center'>
                <img className='mx-4 mx-lg-4 slide-img' src={asianet}/> 
                <img className='mx-4 mx-lg-4 slide-img' src={fm}/>
                <img className='mx-4 mx-lg-4 slide-img' src={geek}/>
                <img className='mx-4 mx-lg-4 slide-img' src={akef}/>
                <img className='mx-4 mx-lg-4 slide-img' src={manifold}/>
                <img className='mx-4 mx-lg-4 slide-img' src={zohi}/>
                <img className='mx-4 mx-lg-4 slide-img' src={white}/>
                {/* <img className='mx-3 slide-img' src={akef}/> */}
            </div>
        </div>
    </div>
  )
}

export default Sponsors