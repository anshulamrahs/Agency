import React from 'react'
import './work.scss'
import WR from '../assets/wr.jpeg'
import WR1 from '../assets/wr1.jpeg'
import WR2 from '../assets/wr2.jpeg'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Work = () => {
  return (
    <div className='work'id='work'>
      <h1>OUR CAPABILITIES</h1>
      <div className="rowd">
        <h3>UI/UX Development</h3>
        <span>+</span>
      </div>
      <div className="rowd">
        <h3>Website Development</h3>
        <span>+</span>
      </div>
      <div className="rowd">
        <h3>Digital Marketing</h3>
        <span>+</span>
      </div>
      <div className="rowd">
        <h3>Product Development</h3>
        <span>+</span>
      </div>
      
    </div>
  )
}

export default Work