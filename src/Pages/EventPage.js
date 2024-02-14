import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import "./About.css"
import "./EventPage.css"
import Events from '../Components/Events'
import dsd from "../Assets/Images/dsd.png"
import { cse } from '../Event_details'
import Footer from '../Components/Footer'
import object2 from "../Assets/Images/object2.png"

function EventPage() {

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
            if(entry.isIntersecting){
              entry.target.classList.add('show')
            }else{
            //   entry.target.classList.remove('show')
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
      
        const hiddenElements = document.querySelectorAll('.hidden')
        const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
        hiddenElements.forEach((el)=> observer.observe(el))
        hiddenElementsLeft.forEach((el)=> observerLeft.observe(el))
      },[])

  return (
    <div className='about d-flex justify-content-start flex-column align-items-center text-white'>
        <Navbar active="events"/>
        <img className='rectangle-top object2' src={object2}/>
        <div className='py-5'></div>
        <h2 className='event-head my-5 '>FEATURED EVENTS</h2>

        <div className='mb-lg-5 event-div-main hidden-left d-flex  align-items-center'>
            <h3 className=' tech-head '>Main Event
            </h3>
            <hr className='head-line-main' />
        </div>
        {cse.main.map((cse)=>{
            return (
                <Events src={cse.img} title={cse.title} desc={cse.desc}  link={cse.link?cse.link:null}/>
            )
        })}

        <div className='event-div mb-lg-5 mt-5 d-flex align-items-center  hidden-left'>
            <h3 className='tech-head tech text-left'>Technical Events
            </h3>
            <hr className='head-line' />
        </div>
        {cse.technical.map((cse)=>{
            return (
                <Events src={cse.img} title={cse.title} desc={cse.desc}  link={cse.link?cse.link:null}/>
            )
        })}

    <div className='event-div-non mb-lg-5 mt-5 hidden-left d-flex align-items-center'>
            <h3 className='tech-head non-tech text-left'>Non Technical Events
            </h3>
            <hr className='head-line-non' />
        </div>
        {cse.non.map((cse)=>{
            return (
                <Events src={cse.img} title={cse.title} desc={cse.desc} link={cse.link?cse.link:null}/>
            )
        })}
        <div className='pb-5'></div>
        
        <Footer/>
    </div>
  )
}

export default EventPage