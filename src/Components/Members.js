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
    <div className='d-flex member justify-content-center  align-items-center hidden flex-wrap' style={{rowGap: '20px'}}>
        {props.data.captain?
            props.data.captain.map((main, i)=>{
                return <div key={i} className='member-div main-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Captain</p>
                        </div>
            })
        :''}
        {props.data.head?
            props.data.head.map((main, i)=>{
                return <div key={i} className='member-div main-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Head</p>
                        </div>
            })
        :''}
        {props.data.heads?
            props.data.heads.map((main, i)=>{
                return <div key={i} className='member-div main-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Sub Head</p>
                        </div>
            })
        :''}
        {props.data.member?
            props.data.member.map((main, i)=>{
                return <div key={i} className='member-div main-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Member</p>
                        </div>
            })
        :''}
        {props.data.vice?
            props.data.vice.map((main, i)=>{
                return <div key={i} className='member-div main-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Vice Captain</p>
                        </div>
            })
        :''}
        {props.data.main?
            props.data.main.map((main, i)=>{
                return <div key={i} className='member-div main-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Main Coodinator</p>
                        </div>
            })
        :''}
        {props.data.sub?
            props.data.sub.map((main, i)=>{
                return <div key={i} className='member-div mt-0 mt-md-0 sub-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Sub Coordinator</p>
                        </div>
            })
        :''}
        {props.data.design?
            props.data.design.map((main, i)=>{
                return <div key={i} className='member-div mt-3 mt-md-0 sub-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Design head</p>
                        </div>
            })
        :''}
        {props.data.designs?
            props.data.designs.map((main, i)=>{
                return <div key={i} className='member-div mt-3 mt-md-0 sub-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>Design Sub head</p>
                        </div>
            })
        :''}
        {props.data.vfx?
            props.data.vfx.map((main, i)=>{
                return <div key={i} className='member-div mt-3 mt-md-0 sub-div mx-4 hidden-left'>
                            <img loading='lazy' className='member-img skeleton' src={main.url}/>
                            <p className='m-0 mt-3'>{main.name}</p>
                            <p className='m-0 mt-2 coord'>VFX Head</p>
                        </div>
            })
        :''}
    </div>
  )
}

export default Members