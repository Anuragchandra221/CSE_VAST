import React from 'react'
import "./Diagonal.css"
import explore from "../Assets/Images/explore.png"

function Diagonal() {
  return (
    <div className='diagonal-div'>
        <div className='diagonal'>
        </div>
        {/* <div className="register-marquee">
            <marquee  width="100%" direction="right" height="100px">
                Register
            </marquee>
        </div> */}
        <div>
            <img src={explore} className='explore'  />
        </div>
    </div>
  )
}

export default Diagonal