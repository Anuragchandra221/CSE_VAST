import React from 'react'
import "./Home.css"
import rectangle from "../Assets/Images/rectangle.png"
import balloon from "../Assets/Images/balloon.png"
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div className='home d-flex justify-content-center align-items-center text-white'>
      <img className='rectangle-top' src={rectangle}/>
      <Navbar/>
      <div className='w-100'> 
        <div className='home-div d-flex justify-content-between align-items-center mx-auto'>
          <h2 className='text-center text-lg-left hero-text mb-4'>KERALA'S BIGGEST <br/> TECH EVENT</h2>
          <h2 className=' hero-count mt-2 mt-lg-0'>12 25 45</h2>
        </div>
        <div className='home-div mx-auto my-2 text-left'>
          <p className='dates px-3 py-2 mb-3 mx-auto mx-lg-0'>
            
            FEB 29 & MAR 1
          </p>
        </div>
        <div className='line-div mx-auto'>
          <div>
            <hr className='line'/>
          </div>
          <img className='balloon' src={balloon}/>
        </div>
      </div>
    </div>
  )
}

export default Home