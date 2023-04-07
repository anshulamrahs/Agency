import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="left">
        <span className='head'>Hi,How can we Help.?</span>
        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fuga minus odit exercitationem, assumenda nihil et dolorum aspernatur magnam necessitatibus explicabo ipsum repudiandae officia! Unde vero sint deserunt assumenda tempora.</span>
        <div className="btn">
          <button>Hire Us</button>
        </div>
      </div>
      <div className="right">
        <img className='rgh' src="https://images.unsplash.com/photo-1678644897380-65e32b963bb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" alt=''/>
      </div>
    </div>
  )
}

export default Home