//import React, { useState } from 'react'
import './services.scss';

// const ground = {background: "#36495c", color: "white"}
 //const stuck = {background:"#fff"}


const Services = () => {

  //const [color,setColor] = useState(stuck);
  //style={color}  onMouseEnter={()=> setColor(ground)} onMouseLeave={()=> setColor(stuck)} 

 
  return (
    <div className='services'>
        <h1>Get in Touch</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.764686910236!2d76.11161077575245!3d32.5591248737554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391cbd831c3b0d41%3A0x7d06747f7c5b21d6!2sWaveyHigh%20Tours!5e0!3m2!1sen!2sin!4v1682488901711!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email Address'/>
          <textarea placeholder='Enquiry' cols='40'rows={6} ></textarea>
          <button   className='btn' type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Services