import React from 'react'
import logo from "../Assets/Images/logo.png"
import "./RespawnNav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function RespawnNav() {
  return (
    <nav class="navbar navbar-expand-lg mx-2">
            <img className='logo' src={logo} />
        <button class="navbar-toggler bg-dark " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBars}/>
            </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ml-auto mt-2  mt-lg-0">
            <li class="nav-item active mx-lg-3 my-2 my-lg-0">
                <a id="navlink" class="nav-link" href="/">HOME<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item mx-lg-3">
                <a id="navlink" class="nav-link my-2 my-lg-0" href="#">NEWS</a>
            </li>
            <li class="nav-item mx-lg-3">
                <a id="navlink" class="nav-link my-2 my-lg-0" href="#division">DIVISIONS</a>
            </li>
            <li class="nav-item mx-lg-3">
                <a id="navlink" class="nav-link my-2 my-lg-0" href="#">MATCHES</a>
            </li>
            <li class="nav-item ml-lg-3">
                <a id="navlink" class="nav-link my-2 my-lg-0" href="#">CONTACT US</a>
            </li>
            
            </ul>
        </div>
    </nav>
  )
}

export default RespawnNav