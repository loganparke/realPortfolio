import React from 'react';
import me from '../assets/homeImages/me.png'

const Home = () => {

  return(
    <div className='home relative flex flex-wrap justify-around w-full h-full pt-16 px-5 bg-white mb-5 mb-5'>
      <div className='w-screen flex'> 
      <div className='w-2/5 h-full'></div>
      <div className='w-3/5 mt-40'>
        <h1 className='text-white font-medium text-5xl'>Hi! I'm Logan Parke</h1>
      <p className=' text-2xl text-white font-bold mt-16'>I am a full stack web-developer. Thanks for checking out my Portfolio!  There are links and details of projects I have done, along with a list and description of my skills, and links to my GitHub, LinkedIn, Resume, and how to contact me.  I am a software developer looking for front-end and back-end developer positions.  I have a great passion for coding, I love solving problems and interacting with programs.  But I also love the outdoors, activites like rock climbing, fishing, mountain biking, and skiing are some of my favorite things to do.
      </p>
      </div>
      
      </div>
      {/* <img src={me} alt='image' className='homeImage mb-5' /> */}
      
      
    </div>
  )
};

export default Home;