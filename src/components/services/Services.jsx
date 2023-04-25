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