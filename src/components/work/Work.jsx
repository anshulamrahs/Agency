import React from 'react'
import './work.scss'
import WR from '../assets/wr.jpeg'
import WR1 from '../assets/wr1.jpeg'
import WR2 from '../assets/wr2.jpeg'

const Work = () => {
  return (
    <div className='work'>
      <div className="card">
        <div className="left">
          <img className='img' src={WR} alt=""/>
        </div>
        <div className="right">
          <h2>The Creek</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cum.</p>
          <div className="span">
          <span>React</span><span>SCSS</span>
          </div>
          <button className="btn">View Demo</button>
        </div>
      </div>
      <div className="card card2">
        <div className="left left2">
          <img className='img img2' src={WR1} alt=""/>
        </div>
        <div className="right">
          <h2>The Creek</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cum.</p>
          <div className="span">
          <span>React</span><span>SCSS</span>
          </div>
          <button className="btn">View Demo</button>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <img className='img' src={WR2} alt=""/>
        </div>
        <div className="right">
          <h2>The Creek</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, cum.</p>
          <div className="span">
          <span>React</span><span>SCSS</span>
          </div>
          <button className="btn">View Demo</button>
        </div>
      </div>
    </div>
  )
}

export default Work