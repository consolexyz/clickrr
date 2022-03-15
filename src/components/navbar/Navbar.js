import React from 'react';
import "./navbar.css";
import * as Scroll from 'react-scroll';
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';



const Navbar =()=> {

  const ScrollLink = Scroll.Link

  return (
    <div className='nav-bar'>
        <ReactLogo />
        <div className='nav-links-container'>
            <ScrollLink to='work-ep-id' spy={true} smooth={true} duration={500} className='nav-links' activeClass="active" >Work Experience</ScrollLink>
            <ScrollLink  to='recommedation-section' spy={true} smooth={true} duration={500} className='nav-links'activeClass="active" >Recommendation</ScrollLink>
            <ScrollLink to ="contact-section" spy={true} smooth={true} duration={500} className='nav-links' activeClass="active"> Contact</ScrollLink>
        </div>
    </div>
  )
}

export default Navbar