import React from 'react'
import './topbar.scss'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="left">
            <span className='logo'>Wave.</span><span className='log'>x</span>
        </div>
        <div className="right">
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#home'>About</a></li>
                <li><a href='#home'>Work</a></li>
                <li><a href='#home'>Hire us!</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar