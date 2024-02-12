import React from 'react'
import "./Footer.css"
import insta from "../Assets/Images/insta.png"
import yt from "../Assets/Images/yt.png"

function Footer() {
  return (
    <div className='footer px-4'>
        <div className='footer-container mx-auto'>
            <hr className='footer-hr' />
            <div className='d-flex justify-content-between footer-div1'>
                <h2 className='footer-heading text-left'>CSE DEPARTMENT</h2>
                <h2 className='footer-date'>2024</h2>
            </div>
            <div className='d-flex footer-nav mt-4'>
                <a href="" className=''>HOME</a>
                <a href="" className=''>EVENTS</a>
                <a href="" className=''>SPONSORS</a>
                <a href="" className=''>TEAM</a>
                <a href="" className=''>ABOUT</a>
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