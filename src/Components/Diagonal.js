import React from 'react'
import "./Diagonal.css"
import explore from "../Assets/Images/explore.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

function Diagonal() {
  return (
    <div className='diagonal-div'>
        <div className='mb-4'>
            <img src={explore} className='explore'  />
        </div>
    </div>
  )
}

export default Diagonal