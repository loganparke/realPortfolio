import React from 'react';
import html from '../assets/images/html-icon.png';
import css from '../assets/images/css-icon.webp';
import js from '../assets/images/js.jpg';
import node from '../assets/images/node-icon.jpg';
import express from '../assets/images/express-icon.png';
import rIcon from '../assets/images/react-icon.jpg';
import mongo from '../assets/images/mongodb-icon.svg';
import mongoose from '../assets/images/mongoose-icon.png';
import mysql from '../assets/images/mysql-icon.png';
import sequelize from '../assets/images/sequelize-icon.png';
import restAPI from '../assets/images/rest-api-icon.png';
import git from '../assets/images/git-icon.png';
import graphQl from'../assets/images/graphQl.jpg';
import apollo from '../assets/images/apollo.png';
import tailwind from '../assets/images/tailwind.png';
import stripe from '../assets/images/stripe.png'
import jwt from '../assets/images/jwt.png';
import redux from '../assets/images/redux.png';


const Skills = () => {

  return(
    <div id='skills' className='bg-white h-auto text-center pt-16'>
      {/* <p className='mySkills pb-10 text-4xl font-bold'>My Skills</p> */}
      <div className='flex justify-center border-t-2 border-gray-300'>
        <div className='flex flex-wrap h-4/5 w-4/5 justify-center font-bold'>
          <div className='m-5'>
            <p>HTML</p>
            <img alt='a' className='object-scale-down h-52 p-2 mb-3' src={html}></img>
          </div>
          <div className='m-5'>
            <p>CSS</p>
            <img alt='b' className='object-scale-down h-52 p-2 mb-3' src={css}></img>
          </div>
          <div className='m-5'>
            <p>Tailwind</p>
            <img alt='c' className='object-scale-down h-52 p-2 mb-3' src={tailwind}></img>
          </div>
          <div className='m-5'>
            <p>Javascript</p>
            <img alt='d' className='object-scale-down h-52 p-2 mb-3' src={js}></img>
          </div>
          <div className='m-5'>
            <p>React</p>
            <img alt='f' className='object-scale-down h-52 p-2 mb-3' src={rIcon}></img>
          </div>
          <div className='m-5'>
            <p>Redux</p>
            <img alt='g' className='object-scale-down h-52 p-2 mb-3' src={redux}></img>
          </div>
          <div className='m-5'>
            <p>GraphQl</p>
            <img alt='GraphQl' className='gqlImg object-scale-down h-52 p-2 mb-3' src={graphQl}></img>
          </div>  
          <div className='m-5'>
            <p>Apollo</p>
            <img alt='Apollo' className='gqlImg object-scale-down h-52 p-2 mb-3' src={apollo}></img>
          </div>
          <div className='m-5'>  
            <p>Node.JS</p>
            <img alt='Node' className='object-scale-down h-52 p-2 mb-3' src={node}></img>
          </div>
          <div className='m-5'>
            <p>Express.JS</p>
            <img alt='Express' className='expImg object-scale-down h-52 p-2 mb-3' src={express}></img>
          </div>
          
          <div className='m-5'>
            <p>MongoDB</p>
            <img alt='MongoDB' className='object-scale-down h-52 p-2 mb-3' src={mongo}></img>
          </div>
          <div className='m-5'>
            <p>Mongoose</p>
            <img alt='Mongoose' className='object-scale-down h-52 p-2 mb-3' src={mongoose}></img>
          </div>
          <div className='m-5'>
            <p>MySql</p>
            <img alt='vMySql' className='object-scale-down h-52 p-2 mb-3' src={mysql}></img>
          </div>
          <div className='mx-5'>
            <p>Sequelize</p>
            <img alt='Sequelize' className='object-scale-down h-52 p-2 mb-3' src={sequelize}></img>
          </div>
          <div className='mx-5'>
            <p>Rest APIs</p>
            <img alt='Rest' className='object-scale-down h-52 p-2 mb-3' src={restAPI}></img>
          </div>
          <div className='mx-5'>
            <p>Git</p>
            <img alt='Git' className='object-scale-down h-52 p-2 mb-3' src={git}></img>
          </div>
          <div className='mx-5'>
            <p>Stripe</p>
            <img alt='Stripe' className='object-scale-down h-52 p-2 mb-3' src={stripe}></img>
          </div>
          <div className='mx-5'>
            <p>JSON Web Token</p>
            <img alt='JSON' className='object-scale-down h-52 p-2 mb-3' src={jwt}></img>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Skills;