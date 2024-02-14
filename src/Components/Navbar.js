import React, { useState } from 'react'
import "./Navbar.css"
import cse from "../Assets/Images/cse.png"
import { faHamburger, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


function Navbar(props) {

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
    
    <ul class="navbar-nav d-flex align-items-center mr-auto mt-2 mt-lg-0">
      <li className='nav-item mx-4'>
        <Link id={props.active=='home'?'active':'navlink'} class={`active nav-link mx-4 nav-link mx-4`} to="/">HOME <span class="sr-only">(current)</span></Link>
      </li> 
      <li className='nav-item mx-4'>
        <Link id={props.active=='events'?'active':'navlink'} class={`active nav-link mx-4 nav-link mx-4`} to="/events" >EVENTS</Link>
      </li>
      <li className='nav-item mx-4'>
        <Link id={props.active=='sponsors'?'active':'navlink'} class={`active nav-link mx-4 nav-link mx-4`} to="#">SPONSORS</Link>
      </li>
      <li className='nav-item mx-4'>
        <Link id={props.active=='team'?'active':'navlink'} class={`active nav-link mx-4 nav-link mx-4`} to="#">TEAM</Link>
      </li>
      <li className='nav-item mx-4'>
        <Link id={props.active=='about'?'active':'navlink'} class={`active nav-link mx-4 nav-link mx-4`} to="/about">ABOUT</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar