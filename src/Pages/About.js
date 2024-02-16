import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import rectangle from "../Assets/Images/rectangle.png"
import "./About.css"
import Footer from '../Components/Footer';


const images = [
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940198/cse%20gallery/IMG_8454_ufpxeu.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940197/cse%20gallery/DSC08653_1_tfcsnw.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940198/cse%20gallery/IMG_8410_s41ibv.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940197/cse%20gallery/DSC08713_flneus.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940197/cse%20gallery/DSC08824_j78ioq.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940198/cse%20gallery/IMG_8411_fbwu97.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940197/cse%20gallery/DSC08677_1_zq1mny.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940197/cse%20gallery/DSC08723_gdmmfr.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940197/cse%20gallery/DSC08666_zhq20a.jpg",
  "https://res.cloudinary.com/dyp9x1eso/image/upload/v1707940197/cse%20gallery/DSC08661_mfpe5t.jpg",

]

function About() {

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    console.log('abotu')
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
   

  return (
    <div className='about d-flex justify-content-center flex-column align-items-center text-white'>
      <img className='rectangle-top' src={rectangle}/>
        <Navbar active="about"/>
        <div className='py-5'></div>
        <h2 className='about-head my-5 hidden-right'>ABOUT</h2>
        <p className='about-para hidden-left'>
            Through all these years, the Computer Science and Engineering
            Department is one of the growing powerhouse of talent, creativity
            and some extraordinary skills. Aiming to breach new boundaries, it
            thrives in excellence. When we talk about Vyvidh, we talk about
            Matrix, we talk about Maze Runner and we talk about Respawn, 
            which was one of the most talked about events in the town. This 
            year too, the goal is to become bigger, better and touch new 
            horizons.
        </p>

        <div className='hrdiv imghr mx-auto my-5'>
                <h2 className='text-center about-head'>Gallery</h2>
            </div>
        <div className='image-gallery px-lg-5 mb-5 pb-4'>
            {images?images.map((im,i)=>{
              // let i = (Math.random()*10)
                return (
                    <li key={i} className={i%2==0?'m-4 hidden-right':'m-4 hidden-left'} >
                        <img loading='lazy' className='skeleton' src={im} />
                    </li>
                ) 
            }):''}
        </div>
        <Footer/>
    </div>
  )
}

export default About