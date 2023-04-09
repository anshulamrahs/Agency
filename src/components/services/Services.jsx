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
            <h3>UI/UX Design</h3>
            <p>Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App</p>
        </div>
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <h3>Icon/Illustration</h3>
            <p> Character Design, Icon Set, Illustration Guide, Illustration Set</p>
        </div>
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <h3>Branding</h3>
            <p>Visual Identity, Stationary Kit, Marketing Materials</p>
        </div>
        </div>
        <div className="cardHold">
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <h3>Motion</h3>
            <p>2d Animation, UI Motion</p>
        </div>
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <h3>Development</h3>
            <p>HTML/CSS, JavaScript Animation, WordPress, Responsive Website</p>
        </div>
        <div className="card">
            <img className='log' src={TR} alt=''/>
            <h3>Photography</h3>
            <p>Travel Photography, Product Photography</p>
        </div>
        </div>
    </div>
  )
}

export default Services