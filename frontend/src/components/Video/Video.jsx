import React from 'react'
import './Video.css'
import video from '../../images/hawaiiTrim.mp4'
import location from '../../images/my-location.svg'
const Video1 = () => {
  return (
    <div>
      <div className="hero">
        <video className='back-video' autoPlay loop muted playsInline>
<source src={video} type='video/mp4'/>
        </video>
        <div className="video-content">
           <h1>Kailua-Kona</h1> 
       <img src={location} style={{width:"30px",height:"30px",marginTop:"3px"}} alt="" /> 
       <span>  Hawai</span> <span>Available Now!</span>
        </div>
      </div>
    </div>
  )
}

export default Video1
