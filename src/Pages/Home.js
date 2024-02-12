import React, { useEffect, useState } from 'react'
import "./Home.css"
import rectangle from "../Assets/Images/rectangle.png"
import balloon from "../Assets/Images/balloon.png"
import Navbar from '../Components/Navbar'
import Diagonal from '../Components/Diagonal'
import Footer from '../Components/Footer'

function Home() {

  const targetDate = new Date("2024-2-29");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
      console.log(timeRemaining)
    }, 60000); 

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const diff = {
        'days': days,
        'hours': hours,
        'min': minutes
      }
      return diff;
    } else {
      return "Target date has passed!";
    }
  }

  return (
    <div className='home d-flex justify-content-center flex-column align-items-center text-white'>
      <img className='rectangle-top' src={rectangle}/>
      <Navbar/>
      <div className='w-100 homeMain d-flex flex-column justify-content-center '> 
        <div className='home-div d-flex justify-content-between align-items-center mx-auto'>
          <h2 className='text-center text-lg-left hero-text mb-4'>EXPLORE, CREATE, <br/> INSPIRE</h2>
          {timeRemaining?<h2 className=' hero-count mt-2 mt-lg-0 d-flex'><span className='d-flex flex-column justify-content-center align-items-center mx-3'>{timeRemaining.days} <p className='date-text '>DAYS</p></span> <span className='d-flex mx-3 flex-column'>{timeRemaining.hours} <p className='date-text'>HOURS</p></span> <span className='d-flex flex-column mx-3'>{timeRemaining.min} <p className='date-text'>MINUTES</p></span></h2>:''}
        </div>
        <div className='home-div mx-auto my-2 text-left'>
          <p className='dates px-3 my-auto py-2 mb-3 mx-auto mx-lg-0'>
            
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
{/* 
      <Diagonal/>
      <Footer/> */}
    </div>
  )
}

export default Home