import React from 'react'
import './topbar.scss'
import Core from '../assets/corebb.png'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="left">
            <img src={Core} className='logo' alt=''/>
        </div>
            <div className="right">
            <ul>
                <li><a href='#home'>Work</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#work'>Experience</a></li>
                <li><a href='#home'>Hire us!</a></li>
            </ul>
            </div>
    </div>
  )
}

export default Topbar