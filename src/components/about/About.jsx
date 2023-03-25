import React from 'react'
import './about.scss'
import Sym from '../assets/sym.png'

const About = () => {
  return (
    <div className='about'>
      <div className="left">
        <img className='mgs' src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt='' />
      </div>
      <div className="right">
        <h2>Hi. We are Wave.x</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores inventore doloribus quas fuga vero a, doloremque dignissimos architecto quibusdam explicabo. Exercitationem, qui! Facilis repudiandae exercitationem consequuntur voluptates dolore quia iste.</p>
        <div className="img">
          <img className='logo' src={Sym} alt=""/>
          <img className='logo' src={Sym} alt=""/>
          <img className='logo' src={Sym} alt=""/>
          <img className='logo' src={Sym} alt=""/>
          <img className='logo' src={Sym} alt=""/>
          <img className='logo' src={Sym} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About