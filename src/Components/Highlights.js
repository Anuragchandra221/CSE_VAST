import React from 'react'
import "./Highlights.css"
import vector2 from "../Assets/Images/vector(3).png"

function Highlights() {
  return (
    <div className='mt-5 pt-3' id="highlights">
      <img src={vector2} className='vector-2' />
        <h2 className='division-heading mb-5'>HIGHLIGHTS</h2>
        <iframe className='vdo-screen'
          src="https://www.youtube.com/watch?v=Pfy6zs50A5c?controls=0">
        </iframe> 
    </div>
  )
}

export default Highlights