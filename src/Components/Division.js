import React from 'react'
import "./Division.css"
import fifa from "../Assets/Images/fifa.png"
import valorant from "../Assets/Images/valorant.png"

function Division() {
  return (
    <div className='mt-5' id="division">
        <h2 className='division-heading mb-5'>OUR DIVISION</ h2>
        <div className='pt-3 d-flex mx-auto division-img-div justify-content-around'>
            <img className='division-img' src={valorant} />
            <img className='division-img' src={fifa} />
        </div>
    </div>
  )
}

export default Division