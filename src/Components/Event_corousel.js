import React from 'react'
import './Event_corousel.css'
import respawn from "../Assets/Images/respawn.png"
import dsd from "../Assets/Images/dsd.png"
import matrix from "../Assets/Images/matrix.png"
import { Link } from 'react-router-dom'

function Event_corousel() {
  return (
    <div className='slider-div mb-4 hidden'>
      {/* <h2 className='text-center text-lg-left event-text mb-4'>EVENTS</h2>
      <hr className='event-line'/> */}
      <h2 className='event-head text-center text-lg-left mb-4 hidden-right pl-2 pl-lg-0'>HIGHLIGHTS</h2>
      <div className="slider d-flex flex-wrap mb-3 justify-content-center justify-content-lg-start">

          <div className="slider-img">
              <Link onClick={()=>window.scrollTo(0,0)} to="/respawnesports"><img src={respawn} /></Link>
          </div>
          <div className="slider-img">
              <Link onClick={()=>window.scrollTo(0,0)} to="/dsd"><img src={dsd} /></Link>
          </div>
          <div className="slider-img">
              <Link onClick={()=>window.scrollTo(0,0)} to="/matrix"><img src={matrix} /></Link>
          </div>
      </div>
      <div className='d-flex mx-auto justify-content-end my-5 mxr-4 mr-lg-0' style={{width: '80%'}}>
        <Link to="/events"><button className='slider-btn px-3 py-2'>Explore More</button></Link>
      </div>
    </div>
  )
}

export default Event_corousel