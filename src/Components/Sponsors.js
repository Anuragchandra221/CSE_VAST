import React, { useEffect } from 'react'
import asianet from "../Assets/Images/sponsors/Asianet Fiber-Internet partner.png"
import fm from '../Assets/Images/sponsors/Club FM 104.8 - radio partner.png'
import geek from "../Assets/Images/sponsors/GEEKBOZ-BRAND-logo-2-copy.png"
import akef from "../Assets/Images/sponsors/AKEF-LOGO-WHITE (1).png"
import "./Sponsors.css"
import manifold from "../Assets/Images/sponsors/LOGO- Empanelled by Govt. Of Kerala star.jpeg"
import zohi from "../Assets/Images/sponsors/zowie.png"
import white from "../Assets/Images/sponsors/whitehoouse.png"

function Sponsors() {
    useEffect(()=>{
        const slider = document.querySelector('.sponsorship');
        const slides = document.querySelectorAll('.slide-img');
        let slideWidth = slides[0].offsetWidth;  // Change from const to let
        const slidesContainer = document.querySelector('.slides');
        let width = slidesContainer.offsetWidth;
        let currentPosition = 0;
        let direction = -1; // 1 for moving right, -1 for moving left
        let isDragging = false;
        let dragStartX = 0;

        function updateSlider() {
        const translateValue = -direction * 100;
        slidesContainer.style.transform = `translateX(${currentPosition}px)`;
        currentPosition = currentPosition + direction * 100;
        
        if (currentPosition <= -width+800 || currentPosition >= (slideWidth-(200))) {
            direction *= -1;
        }
        console.log(currentPosition, slideWidth, slides.length, width)
        }

        // Automatically move to the next slide every 5 seconds
        setInterval(updateSlider, 2000);

        function handleMouseMove(event) {
            if (isDragging) {
              const dragDelta = event.clientX - dragStartX;
              currentPosition += dragDelta;
              dragStartX = event.clientX;
              updateSlider();
            }
          }

        // Handle window resize to adjust slide width
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', function() {
        slideWidth = slides[0].offsetWidth;
        updateSlider();
        });

    }, [])
  return (
    <div className='sponsor-div mb-5 hidden'>
        <h2 className='event-head text-center text-lg-left mb-3 pl-2 pl-lg-0'>WE ARE FUELED BY</h2>
        <div className='sponsorship d-flex flex-column'>
            <div className='slides d-flex'>
                <img className='mx-3 mx-lg-4 slide-img' src={asianet}/> 
                <img className='mx-3 mx-lg-4 slide-img' src={fm}/>
                <img className='mx-3 mx-lg-4 slide-img' src={geek}/>
                <img className='mx-3 mx-lg-4 slide-img' src={akef}/>
                <img className='mx-3 mx-lg-4 slide-img' src={manifold}/>
                <img className='mx-3 mx-lg-4 slide-img' src={zohi}/>
                <img className='mx-3 mx-lg-4 slide-img' src={white}/>
                {/* <img className='mx-3 slide-img' src={akef}/> */}
            </div>
        </div>
    </div>
  )
}

export default Sponsors