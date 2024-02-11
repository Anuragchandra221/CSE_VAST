import React, { useState } from 'react'
import "./Navbar.css"
import cse from "../Assets/Images/cse.png"
import { faHamburger, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {

    const [active, setActive] = useState('home') 

  return (
    <nav id="navbar" class="navbar navbar-expand-lg mt-1 px-2 px-lg-0">
        <div className='d-flex justify-content-between w-100 align-items-center '>
            <img src={cse} className='mx-0' />
    <button class="navbar-toggler " style={{backgroundColor: 'var(--font)'}} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="" style={{color: "var(--background)"}}>
            <FontAwesomeIcon icon={faBars} />
        </span>
    </button>
        </div>
  <div class="collapse navbar-collapse pl-0" id="navbarTogglerDemo01">
    
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className='nav-item mx-4' onClick={()=>setActive('home')}>
        <a class={active=="home"?`active nav-link`: `mx-4`} href="#" id="navlink">HOME <span class="sr-only">(current)</span></a>
      </li>
      <li class={active=="events"?`active nav-item mx-4`: `nav-item mx-4`} onClick={()=>setActive('eveents')}>
        <a class="nav-link" href="#" id="navlink" >EVENTS</a>
      </li>
      <li class={active=="sponsors"?`active nav-item mx-4`: `nav-item mx-4`} onClick={()=>setActive('sponsors')}>
        <a class="nav-link" id="navlink" href="#">SPONSORS</a>
      </li>
      <li class={active=="team"?`active nav-item mx-4`: `nav-item mx-4`} onClick={()=>setActive('team')}>
        <a class="nav-link" id="navlink" href="#">TEAM</a>
      </li>
      <li class={active=="about"?`active nav-item mx-4`: `nav-item mx-4`} onClick={()=>setActive('about')}>
        <a class="nav-link" id="navlink" href="#">ABOUT</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar