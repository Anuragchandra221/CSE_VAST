import React from 'react'
import mlbb from "../Assets/Images/mlbb_logo.png"
import kohai from "../Assets/Images/kohai_logo.png"
import infinix from "../Assets/Images/infinix_logo.png"
import "./Sponsors.css"

function Sponsors() {
  return (
    <div className='mt-5 pt-3' id="sponsors">
        <h2 className='division-heading mb-3 mb-lg-5'>SPONSORS</h2>
        <div className='d-flex sponsor-div flex-wrap justify-content-center'>
            <img src={mlbb} className='sponsor-image mx-auto py-3 py-lg-0 mx-lg-5' />
            <img src={infinix} className='sponsor-image mx-auto py-3 py-lg-0 mx-lg-5' />
            <img src={kohai} className='sponsor-image mx-auto py-3 py-lg-0 mx-lg-5' />
        </div>
    </div>
  )
}

export default Sponsors