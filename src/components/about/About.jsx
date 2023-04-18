import React from 'react'
import './about.scss'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OR from '../assets/ocean.jpeg'

const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return(
    <div className="about">
    <h1>WORK CATALOUGE</h1>
    <Carousel responsive={responsive}>
  <div className='drown'>
    <div className="imgs">
    <img src={OR} alt='' className='img' />
    <OpenInNewIcon className='icon'/>
    </div>
    <h5>Portfolio</h5>
    <h3>Anshul's Portfolio</h3>
  </div>
  <div className='drown'>
    <div className="imgs">
    <img src={OR} alt='' className='img' />
    <OpenInNewIcon className='icon'/>
    </div>
    <h5>Portfolio</h5>
    <h3>Anshul's Portfolio</h3>
  </div>
  <div className='drown'>
    <div className="imgs">
    <img src={OR} alt='' className='img' />
    <OpenInNewIcon className='icon'/>
    </div>
    <h5>Portfolio</h5>
    <h3>Anshul's Portfolio</h3>
  </div>
  <div className='drown'>
    <div className="imgs">
    <img src={OR} alt='' className='img' />
    <OpenInNewIcon className='icon'/>
    </div>
    <h5>Portfolio</h5>
    <h3>Anshul's Portfolio</h3>
  </div>
</Carousel>;
    </div>
  );
}

export default About