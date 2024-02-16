import React, { useState } from 'react'
import "./ScrollButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollButton() {
    const [visible, setVisible] = useState(false)
    const toggle = ()=>{
        const scrolled = document.documentElement.scrollTop;
        console.log(scrolled)
        if(scrolled>300){
            setVisible(true)
        }else if(scrolled<=500){
            setVisible(false)
        }
    }
    const scroll = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    window.addEventListener('scroll', toggle)
  if(visible){
    return (
    <div className='scroll'>
        <button onClick={scroll}>
        <FontAwesomeIcon icon={faArrowUp} />
        </button>
    </div>
  )
}else{
    return <></>
}
}

export default ScrollButton