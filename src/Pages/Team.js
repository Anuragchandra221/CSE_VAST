import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { team } from '../Event_details'
import Members from '../Components/Members'
import object2 from "../Assets/Images/object2.png"
import Footer from '../Components/Footer'
import ScrollButton from '../Components/ScrollButton'

function Team() {


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

  return (
    <div className='about d-flex justify-content-center flex-column align-items-center text-white'>
      <ScrollButton/>
        <Navbar active="team"/>
        <img className='rectangle-top object2' src={object2}/>
        <div className='py-5'></div>
        <h2 className='event-head my-5 hidden-right'>TECH COORDINATORS</h2>
        <Members data={team.tech} />
        <h2 className='event-head my-5 hidden-right'>RESPAWN E-SPORTS TOURNAMENTS</h2>
        <Members data={team.respawn} />
        <h2 className='event-head my-5 hidden-left'>DEVSHOWDOWN</h2>
        <Members data={team.dsd} />
        <h2 className='event-head my-5 hidden-right'>REFIX</h2>
        <Members data={team.refix} />
        <h2 className='event-head my-5 hidden-left'>D_BUG</h2>
        <Members data={team.dbug} />
        <h2 className='event-head my-5 hidden-right'>DARKCODE</h2>
        <Members data={team.darkcode} />
        <h2 className='event-head my-5 hidden-right'>CODEX</h2>
        <Members data={team.codex} />
        <h2 className='event-head my-5 hidden-left'>QWIZZY</h2>
        <Members data={team.quiz} />
        <h2 className='event-head my-5 hidden-left'>TYPRACE</h2>
        <Members data={team.typrace} />
        <h2 className='event-head my-5 hidden-right'>ANIMAZE</h2>
        <Members data={team.animaze} />
        <h2 className='event-head my-5 hidden-left'>CODE 2 CANVAS</h2>
        <Members data={team.c2c} />
        <h2 className='event-head my-5 hidden-right'>MATRIX</h2>
        <Members data={team.matrix} />
        <h2 className='event-head my-5 hidden-left'>MAZE RUNNER</h2>
        <Members data={team.maze} />
        <h2 className='event-head my-5 hidden-right'>PHOTOBOOTH</h2>
        <Members data={team.photo} />
        <h2 className='event-head my-5 hidden-left'>UDZN</h2>
        <Members data={team.udzn} />
        <h2 className='event-head my-5 hidden-right'>WORKSHOP</h2>
        <Members data={team.workshop} />
        <h2 className='event-head my-5 hidden-left'>MEDIA TEAM</h2>
        <Members data={team.media} />
        <h2 className='event-head my-5 hidden-left'>MARKETING TEAM</h2>
        <Members data={team.marketing} />
        <div className='py-3'></div>
        <Footer/>
    </div>
  )
}

export default Team