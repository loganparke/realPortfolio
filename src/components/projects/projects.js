import React, { useState } from 'react';
import { RentalData, LocallyData, ForceFitData } from './sliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Projects = () => {

  const [currentR, setCurrentR] = useState(0);
  const lengthR = RentalData.length;
  const [currentL, setCurrentL] = useState(0);
  const lengthL = LocallyData.length;
  const [currentF, setCurrentF] = useState(0);
  const lengthF = ForceFitData.length;
 

  if(!Array.isArray(RentalData) || RentalData.length <= 0) {
    return null;
  }

  const prevSlideR = () => {
    setCurrentR(currentR === 0 ? lengthR -1 : currentR - 1);
  }
  const nextSlideR = () => {
    setCurrentR(currentR === lengthR - 1 ? 0 : currentR + 1);
  }

  const prevSlideL = () => {
    setCurrentL(currentL === 0 ? lengthL -1 : currentL - 1);
  }
  const nextSlideL = () => {
    setCurrentL(currentL === lengthL - 1 ? 0 : currentL + 1);
  }

  const prevSlideF = () => {
    setCurrentF(currentF === 0 ? lengthF -1 : currentF - 1);
  }
  const nextSlideF = () => {
    setCurrentF(currentF === lengthF - 1 ? 0 : currentF + 1);
  }

  return(
    <div className='w-full bg-gray-600 p-3 pt-16'>
      {/* <h1 className='my-2'>Projects</h1> */}

      <div className='bg-white m-3 flex shadow rounded-xl '>
        <div className='w-2/5 p-3 flex flex-wrap justify-between'>
          <div className='w-full'>
            <h2 className='text-4xl font-bold m-8'>Rental App</h2>
            <p className='text-left m-8 py-5'>Create a digital guide for your Vacation Rental Property, include info about your home, and add locations to the map to show your guests local restaurants, shopping, and activites.</p>
            <p>  This application uses React on the front end, GraphQL to connect to Node.js on the backend, and MongoDB for the database.  It also integrates the Google Maps api, SendGrid for sending emails, and Stripe to take user payments</p>
          </div>
          <div className='w-full'>
            <a className='border-b-2 border-cyan-600 text-cyan-600' target='_blank' href='https://github.com/loganparke/rental-app' >Visit Rental-App's Github Repository here</a>
            <p><a className='border-b-2 border-cyan-600 text-cyan-600' target='_blank' href='https://lit-temple-89065.herokuapp.com/' >Visit Rental-App's Website here</a></p>
          </div>
        </div>
        
        <div className='slider w-3/5 h-100'>
          <FaArrowAltCircleLeft onClick={prevSlideR} className='leftArrow'/>
          <FaArrowAltCircleRight onClick={nextSlideR} className='rightArrow' />
          {RentalData.map((slide, index) => {
            return (
              <div className={index === currentR ? 'slide active' : 'slide'}>
                {index === currentR && (<img src={slide.image} alt='image' className='image' />)}
                
              </div>
            )
          })}
        </div>
      </div>

      <div className='bg-white my-12 mx-3 flex shadow rounded-xl'>
      <div className='slider w-3/5 h-100'>
          <FaArrowAltCircleLeft onClick={prevSlideL} className='leftArrow'/>
          <FaArrowAltCircleRight onClick={nextSlideL} className='rightArrow' />
          {LocallyData.map((slide, index) => {
            return (
              <div className={index === currentL ? 'slide active' : 'slide'}>
                {index === currentL && (<img src={slide.image} alt='image' className='image' />)}
                
              </div>
            )
          })}
        </div>
        
        <div className='w-2/5 p-3 flex flex-wrap justify-between'>
          <div className='w-full'>
            <h2 className='text-4xl font-bold m-8'>Locally</h2>
            <p className='text-left m-8 py-5'>
              Look up Local restaurants and other businesses and see their address, website, and other info, along with user reviews on their service.
              Add your business to the site or review other businesses as well.
            </p>
            <p>Locally was made using the MVC framwork, rendering the webpages from the backend using handlebars in Node.js, along with mySQL and Sequelize for the database</p>
          </div>
          <div className='w-full'>
          <a className='border-b-2 border-cyan-600 text-cyan-600' target='_blank' href='https://github.com/loganparke/locally' >Visit Locally's Github Repository here</a>
          <p><a className='border-b-2 border-cyan-600 text-cyan-600' target='_blank' href='https://safe-anchorage-05872.herokuapp.com/' >Visit Locally's Website here</a></p>
          </div>
        </div>

      </div>
      
      <div className='bg-white m-3 flex shadow rounded-xl'>

      <div className='w-2/5 p-3 flex flex-wrap justify-between'>
          <div className='w-full'>
            <h2 className='text-4xl font-bold m-8'>Force Fit</h2>
            <p className='text-left m-8 py-5'>Track your workouts, including the exercise you did, and how many sets/reps or how long/how much weight you used. Also keep track of you workout history on ForceFit.</p>
            <p>Force Fit uses React on the front end, GraphQL to connect to Node.js on the backend, and MongoDB for the database.</p>
          </div>
          <div className='w-full'>
          <a className='border-b-2 border-cyan-600 text-cyan-600' target='_blank' href='https://github.com/loganparke/force-fit' >Visit Force Fit's Github Repository here</a>
          <p><a className='border-b-2 border-cyan-600 text-cyan-600' target='_blank' href='https://force-fit-order-66.herokuapp.com/login' >Visit Force Fit's Website here</a></p>
          </div>
        </div>

        <div className='slider w-3/5 h-100'>
          {ForceFitData.map((slide, index) => {
            return (
              <>
              <FaArrowAltCircleLeft onClick={prevSlideF} className='leftArrow'/>
              <FaArrowAltCircleRight onClick={nextSlideF} className='rightArrow' />
              <div className={index === currentF ? 'slide active' : 'slide'}>
                {index === currentF && (<img src={slide.image} alt='image' className='image' />)}
              </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
};

export default Projects;