import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  const [activeNav, setActiveNav] = useState('Home');


  // const handleToggle = () => {
    // console.log(navRef);
    // if (activeNav === false){
    //   setActiveNav(true);
    //   navRef.current.classList.toggle('navigationClosed');
    //   navRef.current.classList.toggle('navigationOpen');
    //   navBgRef.current.classList.toggle('navbgClosed');
    //   navBgRef.current.classList.toggle('navbgOpen');
    // } else if(activeNav === true){
    //   setActiveNav(false);
    //   navRef.current.classList.toggle('navigationClosed');
    //   navRef.current.classList.toggle('navigationOpen');
    //   navBgRef.current.classList.toggle('navbgClosed');
    //   navBgRef.current.classList.toggle('navbgOpen');
    // }
  // }

  return (
    <div className="relative z-50">
      {/* <div className="absolute text-white w-full flex justify-between z-50">
        {activeNav === false ? (
          <button className="m-4 textClass text-3xl flex" onClick={() => 
            handleToggle()
          }>Explore <p className="text-white opacity-0">.  .</p><MdArrowForwardIos className="text-3xl mt-1 textClass"/></button>
        ) : (
          <button className="m-4 textClass text-3xl flex" onClick={() => handleToggle()}>Explore <p className="text-white opacity-0">.  .</p> <MdArrowBackIos className="text-3xl mt-1 textClass"/></button>
        )}
        <p></p>
      </div>
      <div ref={navBgRef} className="navbgClosed" onClick={() => 
            handleToggle()
          }></div> */}
        {/* <div ref={navRef} className="navigationClosed  justify-between flex flex-wrap">  */}
          <nav role="navigation" className='absolute flex w-full text-3xl font-bold justify-around pt-3'>
            <p className="opacity-0">h</p>
            <Link className={activeNav === 'Home' ? "hover-underline-animation navUnderline" : 'hover-underline-animation'} to="/home" onClick={() => setActiveNav('Home')}>Home</Link>
            <Link className={activeNav === 'Projects' ? "hover-underline-animation navUnderline" : 'hover-underline-animation'} to="/Projects" onClick={() => setActiveNav('Projects')}>Projects</Link>
            <Link className={activeNav === 'Skills' ? "hover-underline-animation navUnderline" : 'hover-underline-animation'} to="/Skills" onClick={() => setActiveNav('Skills')}>Skills</Link>
            <Link className={activeNav === 'Contact' ? "hover-underline-animation navUnderline" : 'hover-underline-animation'} to="/Contact" onClick={() => setActiveNav('Contact')}>Contact Info & Links</Link>
            <p className="opacity-0">h</p>
            <p className="opacity-0">h</p>
          </nav>
        {/* </div> */}
    </div>
    
  )
}

export default Nav;