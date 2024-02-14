import React from 'react'
import './Event_corousel.css'
import dsd from "../Assets/Images/dsd.png"
import c2c from "../Assets/Images/c2c.png"
import udzn from "../Assets/Images/udzn.png"

function Event_corousel() {
  return (
    <div className='slider-div mb-4'>
      <h2 className='text-center text-lg-left event-text mb-4'>EVENTS</h2>
      <hr className='event-line'/>
      <div className="slider d-flex flex-wrap mb-3 justify-content-center justify-content-lg-start">

          <div className="slider-img">
              <img src={dsd} />
          </div>
          <div className="slider-img">
              <img src={c2c} />
          </div>
          <div className="slider-img">
              <img src={c2c} />
          </div>
          <div className="slider-img">
              <img src={c2c} />
          </div>
          <div className="slider-img">
              <img src={udzn} />
          </div>
          <div className="slider-img">
              <img src={udzn} />
          </div>
          <div className="slider-img">
              <img src={udzn} />
          </div>
      </div>
      <div className='d-flex w-100 justify-content-end'>
        <button className='slider-btn px-3 py-2'>Explore More</button>
      </div>
    </div>
  )
}

export default Event_corousel