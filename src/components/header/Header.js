import React from 'react'
import  * as Scroll from 'react-scroll';
import './header.css'
import {ReactComponent as Mockup} from '../../assets/mockup.svg';

const Header = () => {
    const Button = Scroll.Button
  return (
    <div className='header'>
    <div className='header-container'>
      <div className='text-container'>
       <div className='text'>
            <p>Waddup, I am Ekeoma Prince, a creative designer that’s specializes in Brand Identity, Motion and UI Designs. I strongly believe that <span className='creativity'> ‘’Creativity can never be less interesting’’</span></p>
        </div>
        <div className='buttons'>
             <Button className='btn-grad' type = "submit" activeClass="active" value="Contact me" to="contact-section" spy={true} smooth={true}  duration={500} />
            <button className='btn-grad '  onClick={()=> window.open("https://www.behance.net/theclickrr" )}>
             Check out my works
            </button>
        </div>
        </div>
        <div className='mockup'>
            <Mockup/>
        </div> 
    </div>
    </div>
  )
}

export default Header