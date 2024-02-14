import React, { useEffect } from 'react'
import "./Event.css"
import Navbar from '../Components/Navbar'
import gold from "../Assets/Images/Gold.png"
import vector2 from "../Assets/Images/Group 248.png" 
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

function Event(props) {
    // console.log(props)
    let guidelines
    if(props.data.guidelines){
      guidelines = props.data.guidelines.split(".")
    }else{
      guidelines = null 
    }
    
    useEffect(()=>{
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show')
          }else{
            entry.target.classList.remove('show')
          }
        })
      },[])
      const observerLeft = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show-left')
          }else{
            entry.target.classList.remove('show-left')
          }
        })
      },[])
      const observerRight = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show-right')
          }else{
            entry.target.classList.remove('show-right')
          }
        })
      },[])
    
      const hiddenElements = document.querySelectorAll('.hidden')
      const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
      const hiddenElementsRight = document.querySelectorAll('.hidden-right')
      hiddenElements.forEach((el)=> observer.observe(el))
      hiddenElementsLeft.forEach((el)=> observerLeft.observe(el))
      hiddenElementsRight.forEach((el)=> observerRight.observe(el))
    },[])
    

    // if(props.event==="canvas"){
    //     window.location.replace("https://forms.gle/qoJSAjvEctc2jWz5A")
    // }else if(props.event==="udzn"){
    //     window.location.replace("https://forms.gle/iVxZKPkVVjgF3jRJ9")
    // }else if(props.event=="respawn"){
    //   window.location.replace("https://forms.gle/64kao6SABBPUwHmP9")
    // }else if(props.event=="dev"){
    //   window.location.replace("https://forms.gle/YCJWpmuouSiWew9s9")
    // }else if(props.event=="animaze"){
    //   window.location.replace("https://forms.gle/g29W5Vji1qP3MW4A8")
    // }
  return (
    <div className='about d-flex justify-content-center flex-column align-items-center text-white'>
      <Navbar active="events" />
      <div className='py-5'></div>
      <div className="single-img mb-5">
        <h2 className='tech-head mt-5 mb-4 text-left hidden'>{props.data.title}</h2>
        <img className="event-img mb-4 hidden" src={props.data.img} />
        {props.data.registration?
        <Link to={props.data.registration} target='_blank' ><button className="single-btn py-2">Register</button></Link>
        
        :''}
        <div className='sevent-div mt-5 hidden-left'> 
            <h3 className='mb-lg-3 event-head text-left '>OVERVIEW
            </h3>
            <hr className='shead-line ' />
        </div>
        <p className='event-para mb-3 hidden' style={{opacity: '.8'}}>{props.data.desc}</p>

        {props.data.prize?
          <>
            <div className='sevent-div mt-5 hidden-right '> 
                <hr className='phead-line' />
                <h3 className='my-lg-3 event-head text-left text-lg-right '>PRIZE
                </h3>
            </div>
            <div className='d-flex justify-content-start hidden justify-content-lg-center mt-3 mt-lg-0 align-items-center'>
              <img className='prize-img' src={gold}/>
              <p className='m-0 ml-2'>Prize pool - Rs {props.data.prize}</p>
            </div>
          </>
        :''}
        {guidelines?
        
        <div className='sevent-div mt-5 hidden-left'> 
              <h3 className='mb-lg-3 event-head text-left '>GUIDELINES
              </h3>
              <hr className='ghead-line' />
          </div>
        :""}
            <div className='hidden'>
              {
                guidelines?
                guidelines.map((guideline)=>{
                  if(guideline!=""){
                    return <div>
                      <p className='text-left guideline'><span className='slash'>\ </span>{guideline}</p>
                    </div>
                  }
                })
                :""
              }
            </div>
            {props.data.contact?    
            <div className='sevent-div mt-5 hidden hidden-right '> 
                <hr className='chead-line' />
                <h3 className='my-lg-3 event-head text-left text-lg-right '>CONTACT
                </h3>
            </div>
          :''}
            {props.data.contact?
            
              <div>
                {props.data.contact.map((con)=>{
                  return <p className='text-left event-para hidden' style={{opacity: '.8'}}>{con}</p>
                })}
              </div>
            :''}
      </div>

      <div className='d-flex w-100 token-div hidden my-5'> 
        <div className='token mb-5 MR-AUTO d-flex flex-column justify-content-center pl-2 p-lg-3 py-2 py-lg-4 '>
            <p className='m-0 text-left mb-1 mb-lg-3 ' style={{color: "#FF342B", fontWeight: '700'}}>{props.data.title}</p>
            <p className='text-left token-para m-0 mb-1 mb-lg-3 '><span style={{fontWeight: '700'}}>Venue</span> - {props.data.venue}</p>
            <p className='text-left token-para m-0 mb-1 mb-lg-3 '><span style={{fontWeight: '700'}}>Faculty Coordinator</span> - {props.data.faculty}</p>
            <p className='text-left token-para m-0  '><span style={{fontWeight: '700'}}>Student Coordinator</span>- {props.data.student}</p>
            {/* <p>Venue-{cse.venue}</p> */}
          </div>
          <div className='d-flex px-3 pl-0 pl-lg-4  justify-content-center align-items-start'>
            <p className='register  pl-lg-5  text-center'>REGISTER <br/> NOW!!</p>
            <img className='register-img' src={vector2}/>
          </div>
      </div>
      <div className='pb-5'></div>

      <Footer/>

    </div>
  )
}

export default Event