import React from 'react'
import logo from "../Assets/Images/Respawn Logo White (use this)(1).png"
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div id="contact" className='row justify-content-around mt-5 pt-3 px-3 px-lg-5'>
        <div className='justify-content-around px-3 px-lg-0'>
            <div className=''>
                <img src={logo} className='footer-logo' />
            </div>
            <div className='text-left mt-3 mt-lg-0'>
                <p style={{color: 'var(--secondary)'}}>COMPANY</p>
                <p>FAQ</p>
                <p>NEWS</p>
                <p>CAREER</p>
            </div>
            <div className='text-left mt-3 mt-lg-0'>
                <p style={{color: 'var(--secondary)'}}>DIVISION</p>
                <p>VALORANT</p>
                <p>FIFA 24</p>
            </div>
            <div className='text-left mt-3 mt-lg-0'>
                <p style={{color: 'var(--secondary)'}}>TOURNAMENTS</p>
                <p>UPCOMING EVENTS</p>
                <p>PAST EVENTS</p>
            </div>
        </div>
        <div className='footer-icon-div mt-4 mb-3 mx-auto d-flex justify-content-between'>
            <p>&copy; RESPAWN 2024</p>
            <div className='mx-auto mx-lg-0'>
                <a href='' className='mx-2'><i class="fa-brands fa-instagram"></i></a>
                <a href='' className='mx-2'><i class="fa-brands fa-facebook"></i></a>
                <a href='' className='mx-2'><i class="fa-brands fa-x-twitter"></i></a>
                <a href='' className='ml-2'><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer