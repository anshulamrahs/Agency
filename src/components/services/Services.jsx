import React from 'react'
import './services.scss';
import TR from '../assets/sym.png'

const Services = () => {
  return (
    <div className='services'>
        <h1>What we Provide</h1>
        <div className="cardHold">

        <div className="card">
            <img className='log' src={TR} alt=''/>
            <p>UI/UX Design</p>
        </div>
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <p>UI/UX Design</p>
        </div>
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <p>UI/UX Design</p>
        </div>
        </div>
        <div className="cardHold">

        <div className="card">
            <img className='log' src={TR} alt=''/>
            <p>UI/UX Design</p>
        </div>
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <p>UI/UX Design</p>
        </div>
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <p>UI/UX Design</p>
        </div>
        </div>
    </div>
  )
}

export default Services