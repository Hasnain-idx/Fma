import React from 'react'
import './styles.css';
const Prenav = () => {
  return (
    <div className='fluid-container main-navbar'> 
    <div className='container logo-links'>
        <div className='logo-img d-flex'>
            <img src="/Assets/sms.png " alt="" />
            <p>hbandsonsllc@gmail.com</p>
            <img id='F3' src="/Assets/phone.png" alt="" />
            <p>605-646-9842</p>
            <img id='F4' src="/Assets/Time.png" alt="" />
      
      </div>

      <div id='F5' className='d-flex'>
        <img src="/Assets/HB.png" alt="" />
        <ul id='F6'>
            <a href="">Home</a>
            <ol>About</ol>
            <ol>Servies</ol>
            <ol>Contact us</ol>

    </ul>

    <button id='F7'>Register/Login</button>
  
      </div>

      <div>
        <img src="/Assets/Section 01.png" alt="" />
      </div>
      <div>
        <img src="/Assets/A1.png" alt="" />
      </div>
      <div>
        <img src="/Assets/A2.png" alt="" />
      </div>
      <div>
        <img src="/Assets/A3.png" alt="" />
      </div>
      <div>
        <img src="/Assets/A4.png" alt="" />
      </div>
      <div>
        <img src="/Assets/A5.png" alt="" />
      </div>
      <div>
        <img src="/Assets/A6.png" alt="" />
      </div>
      <div>
        <img src="/Assets/A7.png" alt="" />
      </div> 



    </div>



   </div>
  
  )
}

export default Prenav