import React from 'react'
import './footer.css'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {CiTwitter} from 'react-icons/ci'
import {IoLogoInstagram} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PRABHAT</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://facebook.com"><TiSocialFacebookCircular /></a>
        <a href="https://instagram.com"><IoLogoInstagram /></a>
        <a href="https://twitter.com"><CiTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;Prabhat Portfolio. All rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
