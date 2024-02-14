import React, { useEffect } from 'react'
import "./Member.css"

function Members(props) {

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
    <div className='d-flex w-100 justify-content-center hidden flex-wrap'>
        {props.data.main?
            props.data.main.map((main)=>{
                return <div className='member-div main-div mx-4 hidden-left'>
                            <img className='member-img' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Main Coodinator</p>
                        </div>
            })
        :''}
        {props.data.sub?
            props.data.sub.map((main)=>{
                return <div className='member-div mt-3 mt-md-0 sub-div mx-4 hidden-left'>
                            <img className='member-img' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Sub Coordinator</p>
                        </div>
            })
        :''}
    </div>
  )
}

export default Members