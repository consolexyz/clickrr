import React from 'react';
import "./Recommendation.css";
import jason from "../../assets/Jason4.jpg";
import john from "../../assets/john3.jpg"

const Recommendation = () => {

  return (
    <div className='recommendation-container' id='recommedation-section'>
      <h2 className='reco-heading'>Recommendations</h2>
        <div className='recommendation'>
            <div className='profile'>
                <img src= {jason} alt = 'jason' className='profile-image'/>
                <div className='profile-text'>
                   <p className ="profile-name">Chika Samuel</p>
                   <p className='profile-occupation'>CEO Jason Porshe</p>
                </div>
             </div>
             <hr></hr>
             <p className='reco-text'>Prince is a creative genius, it comes very naturally to him, he’s a brillliant kid, we clicked on the first demo art he sent to me for my brand and he’s always willing to put in work relentlessly, I stronly recommend him.</p>
        </div>
        <div className='recommendation'>
            <div className='profile'>
                <img src= {john} alt = 'john' className='profile-image'/>
                <div className='profile-text'>
                   <p className='profile-name'>John Ayanyemi</p>
                   <p  className='profile-occupation'>Creative Designer</p>
                </div>
             </div>
             <hr></hr>
             <p className='reco-text'>Prince is a great guy, we’ve only met virually but I can say he is resilient, hardworking and always invest time and resources in himself and his projects, I strongly recommend him.</p>
        </div>
    </div>
  )
}

export default Recommendation