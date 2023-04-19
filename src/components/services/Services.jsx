import React from 'react'
import './services.scss';
import TR from '../assets/sym.png'

const Services = () => {
  return (
    <div className='services'>
        <h1>Get in Touch</h1>
        <form>
          <input type='text' placeholder='Name'/>
          <input type='email' placeholder='Email Address'/>
          <textarea placeholder='Enquiry' cols='40'rows={6} ></textarea>
          <button type='submit'>Send</button>
        </form>

    </div>
  )
}

export default Services