import React from 'react'
import './footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AdUnitsIcon from '@mui/icons-material/AdUnits';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <a href="">Products</a>
        <a href="">About</a>
        <a href="">Blog</a>
        <a href="">Services</a>
        <a href="">Jobs</a>
      </div>
      <span>Copyright© by CoreBrush Studios</span>
      <div className="right">
        <a>Instagram <InstagramIcon className="icon"/></a>
        <a>LinkedIN<LinkedInIcon className="icon"/></a>
        
      
      </div>
    </div>
  )
}

export default Footer
