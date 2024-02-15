import React from 'react'
import "./Footer.css"
import insta from "../Assets/Images/insta.png"
import yt from "../Assets/Images/yt.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer px-4 pb-2'>
        <div className='footer-container mx-auto'>
            <hr className='footer-hr' />
            <div className='d-flex justify-content-between footer-div1'>
                <h2 className='footer-heading text-left mt-3 mt-lg-0'>CSE DEPARTMENT</h2>
                <h2 className='footer-date mt-2 mt-lg-0 text-left text-right'>
                    <span className='mr-3'>2</span>
                    <span className='mr-3'>0</span>
                    <span className='mr-3'>2</span>
                    <span className=''>4</span>
                    
                </h2>
            </div>
            <div className='d-flex footer-nav mt-4'>
                <Link onClick={()=>window.scrollTo(0, 0)}  className='footer-link' to="/">HOME</Link>
                <Link onClick={()=>window.scrollTo(0, 0)}  className='footer-link' to="/events">EVENTS</Link>
                <Link onClick={()=>window.scrollTo(0, 0)}  className='footer-link' to="/team">TEAM</Link>
                <Link onClick={()=>window.scrollTo(0, 0)}  className='footer-link' to="/about">ABOUT</Link>
            </div>
            <div className='text-center text-lg-right mt-4 mt-lg-0 mb-2 '>
                <a href='https://www.instagram.com/csevast/'><img src={insta} className='logos mx-4' /></a>
                <a href='https://www.youtube.com/@vastcse'><img src={yt} className='logos ' /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer