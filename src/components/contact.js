import React from 'react';

import gitHub from "../assets/images/GitHub-Mark-120px-plus.png"
import linkedIn from "../assets/images/icons8-linkedin-circled-100.png"
import resume from "../assets/images/resume-icon.jpg";
import email from "../assets/images/email.png"

const Contact = () => {

  return(
    <div id="contact" className='flex flex-wrap justify-around h-screen w-screen bg-white'>
      <div className='mt-16 w-full'></div>

      <div className='w-full'>
        <p className='m-auto text-center w-4/5 px-12 text-3xl font-bold'>Thanks for checking out my portfolio!  If you would like to get in contact with me, the best way is to send me a message on LinkedIn or to email me at <span className='underline'>logan.c.parke@gmail.com</span>.</p>
      </div>

      <div className='w-full flex flex-wrap justify-around mt-16'>
        <div className='flex justify-center items-center'>
          <a href="https://github.com/loganparke" target="_blank" className="contactBtn self-center bg-blue-400 p-3 rounded-xl">
            <img src={gitHub} alt="gitHub" className="githubPic object-scale-down h-24"></img>
            <p className="text-center text-white font-bold mt-2">My GitHub</p>
          </a>
          
        </div>
        
        <div className='flex justify-center '>
          <a href="https://www.linkedin.com/in/logan-parke-2b2915173/" target="_blank" className="contactBtn self-center items-center bg-blue-400 p-3 rounded-xl">
            <img src={linkedIn} alt="linkedIn" className="linkedInPic object-scale-down h-24"></img>
            <p className="text-center text-white font-bold mt-2">My LinkedIn</p>
          </a>
          
        </div>
        <div className='flex justify-center items-center'>
          <a href="https://docs.google.com/document/d/1UoiLl08y2dkr05MTRV2YMt4Y0Hv_0B50Ikw8UXZeUww/edit?usp=sharing" target="_blank" className="contactBtn self-center bg-blue-400 p-3 rounded-xl">
          <img src={resume} alt="resume" className="resumePic object-scale-down h-24"></img>
          <p className="text-center text-white font-bold mt-2">My Resume</p>
          </a>
          
        </div>
        <div className='flex justify-center items-center'>
          <a href="mailto:logan.c.parke@gmail.com" className="contactBtn self-center bg-blue-400 p-3 rounded-xl">
          <img src={email} alt="email" className="emailPic object-scale-down h-24"></img>
          <p className="text-center text-white font-bold mt-2">Email Me</p>
          </a>
          
        </div>
      </div>
      <div className='mb-16 w-full'></div>
      <div className='mb-16 w-full'></div>
    </div>
  )
};

export default Contact;