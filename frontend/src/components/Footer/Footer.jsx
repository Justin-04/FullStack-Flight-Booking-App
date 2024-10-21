import React from 'react'
import './Footer.css'
import github from '../../images/github.svg';
import linkedIn from '../../images/linkedin.svg'
import email from '../../images/gmail.svg'
const Footer = () => {
  return (
    <div className='main-footer'>
      <center>
      <table className="footer-table">
        <tr className='header'>
          <td>About Me</td>
          <td>Contact</td>
        </tr>
        <tr>
          <td>My name is Justin and I'm a web developer</td>
          <td><img src={email} style={{width:"13px",height:"13px"}} alt="" /> <span>Email</span></td>
        </tr>
        <tr>
          <td>I created this Full-Stack Flight booking Application</td>
          <td><img src={github} style={{width:"13px",height:"13px"}} alt="" /><span>Github</span></td>
        </tr>
        <tr>
          <td>Hope you enjoy it! :)</td>
          <td><img src={linkedIn} style={{width:"13px",height:"13px"}} alt="" /><span>LinkedIn</span></td>
        </tr>
      </table>
      </center>
      <center><h5>All Rights Reserved ©</h5></center>
    </div>
  )
}

export default Footer
