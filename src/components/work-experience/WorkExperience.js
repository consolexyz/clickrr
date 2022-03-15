import React  from 'react';
import Data from './Data';
import "./work-experience.css"

const WorkExperience= ()=>{

  const workexperience = Data.map(item => <div className='content-box'>
    <div className='content' key={item.id}>
    <h3>{item.title}</h3>
    <h4>{item.date}</h4> 
    <p className='content-description'>{item.description}</p>
     </div>
     <hr className='line'></hr>
  </div>)



  return (
   
    <div className='Work-exp-container' id='work-ep-id'>
      <div className='heading'>
      <h2>Work Experience</h2>
      <p>I have worked and gained solid experience in these companies</p>
        </div>
      {workexperience}
    </div>
  )
}

export default WorkExperience