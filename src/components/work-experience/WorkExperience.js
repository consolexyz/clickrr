import React, { useEffect}  from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from './Data';
import "./work-experience.css"

const WorkExperience= ()=>{

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() =>{

  
    
    const contents = gsap.utils.toArray(".content");

        gsap.set(contents, {autoAlpha: 0, y: 50 });

        contents.forEach((content, i) => {

         const anim = gsap.to(content,{duration : 1, autoAlpha: 1, y : 0, paused:true});
    
        ScrollTrigger.create({
          trigger: content,
          end:"bottom bottom",
          once:true,
           onEnter: self =>{
            self.progress === 1 ? anim.progress(1) :
           anim.play()
           }
        })
      });
  },[])



  const workexperience = Data.map(item => <div className='content-box' key={item.id}  >
    <div className='content' >
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