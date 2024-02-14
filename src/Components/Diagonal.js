import React from 'react'
import "./Diagonal.css"
import explore from "../Assets/Images/explore.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

function Diagonal() {
  return (
    <div className='diagonal-div'>
        {/* <marquee  width="100% py-2" direction="right" height="100px">
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
            <span className='mx-3'>Register <FontAwesomeIcon icon={faArrowTrendUp} /></span>
        </marquee> */}
        <div className='mb-4'>
            <img src={explore} className='explore'  />
        </div>
    </div>
  )
}

export default Diagonal