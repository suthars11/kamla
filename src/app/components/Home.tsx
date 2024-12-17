
"use client";

import React, { useEffect } from 'react'
import Hero from './Home/Hero/Hero'
import Apparment from './Home/Apparment/Apparment'
import Properties from './Home/Properties/Properties'
import CityProperty from './Home/CityProperty/CityProperty'
import BuildingFeature from './Home/BuildingFeature/BuildingFeature'
import Review from "./Home/Review/Review"
import Blog from './Home/Blog/Blog'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Home = () => {
  useEffect(()=>{
    const initAos=async()=>{
      await import ("aos");
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement:"top-bottom"

      });
    };
    initAos();
  })
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Apparment/>
      <Properties/>
      <CityProperty/>
     <BuildingFeature/>
     <Review/>
     <Blog/>
    </div>
  )
}

export default Home