import React from 'react'

function Event(props) {
    console.log(props)
    if(props.event==="canvas"){
        window.location.replace("https://forms.gle/qoJSAjvEctc2jWz5A")
    }else if(props.event==="udzn"){
        window.location.replace("https://forms.gle/iVxZKPkVVjgF3jRJ9")
    }else if(props.event=="respawn"){
      window.location.replace("https://forms.gle/64kao6SABBPUwHmP9")
    }
  return (
    <div>

    </div>
  )
}

export default Event