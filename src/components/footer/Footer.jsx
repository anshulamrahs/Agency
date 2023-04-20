import React from 'react'
import './footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AdUnitsIcon from '@mui/icons-material/AdUnits';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="left">
        <a href="https://google.com">Products</a>
        <a href="https://google.com">About</a>
        <a href="https://google.com">Blog</a>
        <a href="https://google.com">Services</a>
        <a href="https://google.com">Jobs</a>
      </div>
      <span>Copyright© by CoreBrush Studios</span>
      <div className="right">
        <a href="https://google.com">Instagram <InstagramIcon className="icon"/></a>
        <a href="https://google.com">LinkedIN<LinkedInIcon className="icon"/></a>
        <a href="https://google.com">Behance<AdUnitsIcon className="icon"/></a>
      
      </div>
    </div>
  )
}

export default Footer
