import React from 'react';
import './contact.css'
import CustomButton from '../custom-button/CustomButton';

const Contact =()=> {
   
    return (
    <div className='contact-container' id='contact-section'>
        <div className='contact-heading'>
        <h2>Contact</h2>
        <p className='contact-text'>Hit any of these Links to reach me Now</p>
            </div>
        <div className='contact-buttons'>
        <div className='first-btn-section'>
        <CustomButton largeBtn onClick={()=> window.open("https://www.behance.net/theclickrr" )}>Check out my works </CustomButton>
        <CustomButton largeBtn onClick={()=> window.open("mailto:www.theclickrr@gmail.com")}>Email me now</CustomButton>
            </div>
        <div className='second-btn-section'>
        <CustomButton onClick={()=> window.open("https://www.instagram.com/theclickrr/")}>Instagram</CustomButton>
        <CustomButton onClick={ () => window.open("https://dribbble.com/theclickrrr")}>Dribble </CustomButton>
        <CustomButton onClick={()=> window.open("https://www.linkedin.com/in/theclickrr/")}>LinkedIn</CustomButton>
        </div>
        <CustomButton onClick={()=> window.open("https://twitter.com/theclickrr")}>Twitter</CustomButton>
        </div>
    </div>
  )
}

export default Contact