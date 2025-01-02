import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

import {
    MdHomeFilled,
    MdInfo,
    MdWork,
    MdArticle,
    MdContactMail,
    MdWorkOutline,
  } from 'react-icons/md';
  


import {
    FaYoutube,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebookF,
  } from 'react-icons/fa';
  

const Footer = () => {


     useGSAP(()=>{

          gsap.from('.nav-elements .nav',{

               y:-80,
               stagger:1,
               opacity:0,
               delay:5,
               scrollTrigger:{
                trigger:".footer",
                scroller:"body",
                start:"top 84%",
                end:"top 30%",
                duration:9,
                scrub:true,
                
             }

          })

          gsap.from('.foot-elements .foot',{

               y:-80,
               stagger:1,
               opacity:0,
               scrollTrigger:{
                  trigger:".footer",
                  scroller:"body",
                  start:"top 80%",
                  end:"top 29%",
                  duration:9,
                  scrub:true
                  
               }

              })     

            gsap.from(".copyright p",{
                    
              x:-200,
              scrollTrigger:{
                trigger:".footer",
                scroller:"body",
                start:"top 50%",
                end:"top 29%",
                duration:9,
                scrub:true
                
             }
                

            })


         
     })



  return (
    <div className='footer w-full h-[70vh] bg-gradient-to-b from-black to-zinc-950 text-white flex justify-center items-center relative'>



    <div className="part1 w-1/2 h-full flex justify-around items-center pb-[2vw] pt-[0.7vw]">
      
       <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className='nav-elements flex justify-center items-center flex-col text-[1.8vw]'>

       <div className='w-auto h-auto flex justify-start flex-col items-start'>


               <div className="nav contact underline-left  cursor-pointer flex justify-center items-center ">
               <MdHomeFilled size={28} className='pt-1'   />
                 Home
               </div>
               <div className="nav about underline-left  cursor-pointer flex justify-center items-center">
               <MdInfo size={28} className='pt-1'   />
                 About Us
               </div>
               <div className="nav project underline-left  cursor-pointer flex justify-center items-center">
               <MdWork size={28} className='pt-1'   />
                 Projects
               </div>
               <div className="nav blog underline-left  cursor-pointer flex justify-center items-center">
               <MdArticle size={28} className='pt-1'   />
                 Blogs
               </div>
               <div className="nav career underline-left  cursor-pointer flex justify-center items-center">
               <MdContactMail size={28} className='pt-1'   />
                 Carrers
               </div>
               <div className="nav contact underline-left  cursor-pointer flex justify-center items-center">
               <MdWorkOutline size={28} className='pt-1'   />
                 Contact Us
               </div>

       </div>

       </div>
       

    </div>


    <div className="part2 w-1/2 h-full  flex justify-center items-center ">
     

    <div className="part1 w-1/2 h-full flex justify-around items-center py-[3vw]">
      
       <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className='foot-elements flex justify-center items-center flex-col text-[2.5vw]'>

           <div className='w-auto h-auto flex justify-start flex-col items-start'>

               <div className="foot contact underline-left  cursor-pointer flex justify-center items-center">
                <FaYoutube size={34} className='pt-1'   />
                Youtube
               </div>
               <div className="foot about underline-left  cursor-pointer flex justify-center items-center">
                <FaLinkedin size={34} className='pt-1'   />
                 LinkdedIn
               </div>
               <div className="foot project underline-left  cursor-pointer flex justify-center items-center">
                <FaTwitter size={34} className='pt-1'   />
                 Twitter
               </div>
               <div className="foot blog underline-left  cursor-pointer flex justify-center items-center">
                 <FaInstagram size={32} className='pt-1'   />
                 Instagram
               </div>

               <div className="foot career underline-left  cursor-pointer flex justify-center items-center">
                 <FaFacebookF size={32} className='pt-1'   />
                 Facebook
               </div>

               </div>   

       </div>
       

    </div>

    </div>
        
            <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className="copyright absolute bottom-[3vw]  text-lg flex justify-center items-center gap-3">

            <p>2025©www.mywebsite.com </p> <p>All rights reserved</p>
            </div>

    </div>
  )
}

export default Footer