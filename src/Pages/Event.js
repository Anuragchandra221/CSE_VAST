import React from 'react'
import "./Event.css"
import Navbar from '../Components/Navbar'

function Event(props) {
    console.log(props)
    if(props.event==="canvas"){
        window.location.replace("https://forms.gle/qoJSAjvEctc2jWz5A")
    }else if(props.event==="udzn"){
        window.location.replace("https://forms.gle/iVxZKPkVVjgF3jRJ9")
    }else if(props.event=="respawn"){
      window.location.replace("https://forms.gle/64kao6SABBPUwHmP9")
    }else if(props.event=="dev"){
      window.location.replace("https://forms.gle/YCJWpmuouSiWew9s9")
    }else if(props.event=="animaze"){
      window.location.replace("https://forms.gle/g29W5Vji1qP3MW4A8")
    }
  return (
    <div className='about d-flex justify-content-center flex-column align-items-center text-white'>
      <Navbar/>
      <div className='py-5'></div>
      <div className="single-img">
        <h2 className='tech-head mt-5 mb-3 text-left'>{props.data.title}</h2>
        <img className="event-img mb-3" src={props.data.img} />
        <button className="single-btn py-2">Register</button>
        <div className='sevent-div mt-5'> 
            <h3 className='mb-lg-3 event-head text-left '>OVERVIEW
            </h3>
            <hr className='shead-line' />
        </div>
        <p className='event-para mb-3'>{props.data.desc}</p>

        <div className='sevent-div mt-3'> 
            <hr className='phead-line' />
            <h3 className='mb-lg-3 event-head text-right '>PRIZE
            </h3>
        </div>
      </div>

    </div>
  )
}

export default Event