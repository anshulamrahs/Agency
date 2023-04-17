import React from 'react'
import './home.scss'
import ROW from '../assets/tech.jpeg'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="left">
      <div className="forSmall">
        <div className="small">
            <span>Building Stunning 
              Projects, Creating attractive Brands</span>
            </div>
              <ArrowOutwardIcon className='icon'/>
           
        </div>
            <div className="forLa">
              <span className='d'>Design.</span>
              <span>Development.</span>
              <span className='k'>Knowledge.</span>
              </div>
      </div>
      <div className="right">
        <img className='rgh' src={ROW} alt=''/>
      </div>
    </div>
  )
}

export default Home