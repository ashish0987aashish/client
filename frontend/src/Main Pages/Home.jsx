import React,{useState,useEffect} from 'react'
import Hero from './SubPages/Hero'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Page2 from './SubPages/Page2'
import Page3 from './SubPages/Page3'
import Page4 from './SubPages/Page4'
import Page5 from './SubPages/Page5'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Headroom from 'react-headroom'


const Home = () => {

  
  



  return (
    <div id='main ' className='home relative '>

      <Headroom className='w-full z-50 absolute' >
      <Navbar className='z-50 absolute' />
      </Headroom>

       <Hero
         className="page1 w-full "
       />
        <Page2
          className="page2 w-full "
        />  
         
         <Page3 
           className='page3 w-full'
         />
          
        <Page4 
           className='page4 w-full'
        />

       <Page5
           className='page5 w-full'
       />

      


        <Footer/>
  
    </div>
  )
}

export default Home