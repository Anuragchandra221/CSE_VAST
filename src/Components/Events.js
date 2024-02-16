import React from 'react'
import "./Events.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownUpAcrossLine, faArrowTrendUp, faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Events(props) {
  return (
    <div className='d-flex event justify-content-center hidden my-4 my-lg-4'>
        <div>
            <Link to={`/${props.link}`} onClick={()=>window.scrollTo(0,0)}><img className='event-img' src={props.src}  /></Link>
        </div>
        <div className='d-flex flex-column mx-3 mx-lg-0 ml-lg-4 mt-3 mt-lg-0 align-items-start'>
            <h4 className='event-heading mb-2'>{props.title}</h4>
            <p className='event-para mb-3'>{props.desc}</p>
            <Link to={`/${props.link}`} onClick={()=>window.scrollTo(0,0)}><button className='event-btn px-3 py-2'>Explore <FontAwesomeIcon icon={faArrowTrendUp} /></button></Link>
        </div>
    </div>
  )
}

export default Events