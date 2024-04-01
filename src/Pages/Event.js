import React, { useEffect } from 'react'
import "./Event.css"
import Navbar from '../Components/Navbar'
import gold from "../Assets/Images/Gold.png"
import vector2 from "../Assets/Images/Group 248.png" 
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import ScrollButton from '../Components/ScrollButton'

function Event(props) {
    // console.log(props)
    let guidelines
    if(props.data.guidelines){
      guidelines = props.data.guidelines.split(".")
    }else{
      guidelines = null 
    }
    
    useEffect(()=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show')
          }else{
            // entry.target.classList.remove('show')
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
      <ScrollButton/>
      <Navbar active="events" />
      <div className='py-5'></div>
      <div className="single-img mb-5">
        <h2 className='tech-head mt-5 mb-4 text-left hidden-left hidden '>{props.data.title}</h2>
        <img className="event-img mb-4  hidden-right hidden " src={props.data.img} />
        {props.data.registration?
        <Link target='_blank'  ><button className="single-btn py-2" style={{opacity: '0.6', cursor: 'not-allowed'}} disabled>Register</button></Link>
        
        :''}
        <div className='mb-lg-3 sevent-div mt-5 d-flex align-items-center hidden-left'> 
            <h3 className='m-0 pr-2 event-head text-left mb-2 mb-lg-0'>OVERVIEW
            </h3>
            <hr className='shead-line ' />
        </div>
        <p className='event-para mb-3 hidden-right' style={{opacity: '.8'}}>{props.data.desc}</p>
          
        {
          props.data.sub?
          <>
            <h4 className='event-head mt-5 mt-lg-4 mb-0'>Sub Events</h4>
            <div className='d-flex flex-wrap justify-content-center align-items-center'>
              {props.data.sub.map((sub, i)=>{
                return <div  className='sub-img m-4'><img src={sub.img} /></div>
              })}
            </div>
          </>
          :''
        }

        {props.data.prize?
          <>
            <div className='sevent-div d-flex align-items-center mt-5 hidden-right '> 
                <hr className='phead-line' />
                <h3 className=' event-head m-0 text-left text-lg-right pl-2'>PRIZE
                </h3>
            </div>
            <div className='d-flex justify-content-start hidden-left justify-content-lg-center mt-3 mt-lg-0 align-items-center'>
              <img className='prize-img' src={gold}/>
              <p className='m-0 ml-2'>Prize pool - Rs {props.data.prize}</p>
            </div>
          </>
        :''}
        {guidelines || props.data.rule?
        
        <div className='sevent-div mt-5 mb-3 mb-lg-3 d-flex align-items-center hidden-left'> 
              <h3 className='m-0 event-head text-left pr-2'>GUIDELINES
              </h3>
              <hr className='ghead-line' />
          </div>
        :""}
        {
          props.data.rule?
          <div className='text-left hidden-right'>
            <a href={props.data.rule} target='_blank'><button className='rule px-3 py-2'>Rule Book <FontAwesomeIcon icon={faArrowTrendUp} /></button></a>
          </div>
          :''
        }
            <div className='hidden-right'>
              {
                guidelines?
                guidelines.map((guideline, i)=>{
                  if(guideline!=""){
                    return <div key={i}>
                      <p className='text-left guideline'><span className='slash'>\ </span>{guideline}</p>
                    </div>
                  }
                })
                :""
              }
            </div>
            {props.data.contact?    
            <div className='sevent-div mt-5 d-flex align-items-center  hidden hidden-right '> 
                <hr className='chead-line' />
                <h3 className='m-0 pl-0 pl-lg-2 mb-2 mb-lg-0 event-head text-left text-lg-right mr-auto  '>CONTACT
                </h3>
            </div>
          :''}
            {props.data.contact?
            
              <div>
                {props.data.contact.map((con, i)=>{
                  return <p key={i} className='text-left event-para hidden' style={{opacity: '.8'}}>{con}</p>
                })}
              </div>
            :''}
      </div>
      

      <div className='d-flex w-100 token-div hidden my-5'> 
        <div className='token hidden-left mb-5 MR-AUTO d-flex flex-column justify-content-center pl-2 p-lg-3 py-2 py-lg-4 '>
            <p className='m-0 text-left mb-1 mb-lg-3 ' style={{color: "#FF342B", fontWeight: '700'}}>{props.data.title}</p>
            <p className='text-left token-para m-0 mb-1 mb-lg-3 '><span style={{fontWeight: '700'}}>Venue</span> - {props.data.venue}</p>
            <p className='text-left token-para m-0 mb-1 mb-lg-3 '><span style={{fontWeight: '700'}}>Faculty Coordinator</span> - {props.data.faculty}</p>
            <p className='text-left token-para m-0  '><span style={{fontWeight: '700'}}>Student Coordinator</span>- {props.data.student}</p>
            {/* <p>Venue-{cse.venue}</p> */}
          </div>
          <div className='d-flex px-3 pl-0 pl-lg-4 hidden-right  justify-content-center align-items-start'>
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