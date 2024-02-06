import React from 'react'
import "./Respawn.css"
import homeImg from "../Assets/Images/Home.png"
import vector1 from "../Assets/Images/vector(2).png"
import RespawnNav from '../Components/RespawnNav'
import Division from '../Components/Division'
import Highlights from '../Components/Highlights'
import Sponsors from '../Components/Sponsors'
import Footer from '../Components/Footer'

function Respawn() {
  return (
    <div className='respawn'>
        {/* <div className='backgound-respawn'></div> */}
        <RespawnNav/>
        <div className='d-flex main-div row home-div  mx-auto justify-content-center align-items-center'>
            <img className='vector-1' src={vector1}/>
            <div className='d-flex col-12 mt-5 pt-4 pt-lg-0 mt-lg-0 img-div col-lg-6 p-0  justify-content-center justify-content-lg-end align-items-center align-items-lg-end'>
                <img className='home-img ' src={homeImg} />
            </div>
            <div className='d-flex col-12  col-lg-6 justify-content-center'>
                <div className='d-flex pl-lg-3 flex-column align-items-center align-items-lg-start  respawn-second-div home-para-div'>
                    <h2 className='mb-2'>RESPAWN'24</h2>
                    <p className='sub-text mb-4'>PLAY, SLAY, REPEAT</p>
                    <p className='text-left para mb-4'>"Unlock the thrill of intense gaming battles! Secure your spot by registering for the upcoming tournament and embrace the competition fever"</p>
                    <button className='respawn-btn px-3 py-2'>Register Here</button>
                </div>
            </div>
        </div>
        <div className='py-lg-5'></div>
        <Division/>
        <div className='py-lg-5'></div>
        <Highlights/>
        <div className='py-lg-5'></div>
        <Sponsors/>
        <div className='py-lg-5'></div>
        <Footer/>
    </div>
  )
}

export default Respawn