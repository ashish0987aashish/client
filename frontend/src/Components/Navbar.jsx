import React, { useState,useEffect } from 'react'

import { useNavigate,useLocation } from 'react-router-dom'

import { MdMenu } from 'react-icons/md'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'




const Navbar = () => {

  const [isShowNavElement, setShowNavElement] = useState(false)
  const [dontShowNav,setDontShowNav] = useState(true)

  const location = useLocation() 
  
  const navigate =  useNavigate()

  const toggleNav = () => {

    setShowNavElement(!isShowNavElement)
    setDontShowNav(!dontShowNav)

  }


  useGSAP(
    () => {
      if (isShowNavElement) {
        gsap.from('.footer', {
          y: -120,
          duration: 0.7,
        })

         gsap.from('.nav-part .nav-elm',{
            y:30,
            duration:0.7,
            stagger:0.1
         })
      }

   
    },
    [isShowNavElement,dontShowNav] // add isShowNavElement as a dependency
  )


  // hide navelem on scroll 
  useEffect(() => {
    const handleScroll = () => {
      if (isShowNavElement) {
        setShowNavElement(false);
        setDontShowNav(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isShowNavElement]);



  return <>
    {isShowNavElement ?

      (<div className='footer w-full h-[60vh] bg-[#f2f7f1] flex justify-center items-start px-5 relative z-50'  style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>


        <div className='w-full h-5/6 flex   mt-[1.5vw] border-b-2 border-zinc-400 px-6 py-3'>

          <div className="part1 w-1/2 h-full flex justify-center items-center">
             
              <div className="h-video w-[28vw] h-[19vw] bg-slate-600 rounded-lg">
                
                <video muted autoPlay loop src="
https://prismic-io.s3.amazonaws.com/rejouice/87835eca-32b7-4eeb-91fc-4ba0dad1fdec_Website-homepage-Work-01_1.mp4" className='w-full h-full  object-cover rounded-lg'></video>
               
              </div>
          </div>

          <div className="part2 w-1/2 h-full  flex justify-end items-center  text-5xl text-black flex-col font-normal">

            <div className='nav-part w-1/2  flex  flex-col gap-0'>

              <div className={`home nav-elm m-0 p-0 underline-U  cursor-pointer hover:font-light   ${
                    location.pathname === '/home' ? 'underline-A font-light' : ''
                  }`}
                
                onClick={()=>{
                    navigate('/home')
                }}
              >
                Home
              </div> 

              <div className={`about nav-elm m-0 p-0 underline-U cursor-pointer hover:font-light  ${
                    location.pathname === '/about' ? 'underline-A font-light' : ''
                  }` }
                 
                 onClick={()=>{
                   navigate('/about')
                 }}
              >
                About Us
              </div>

              <div className={`project nav-elm underline-U cursor-pointer hover:font-light  ${
                    location.pathname === '/project' ? 'underline-A font-light' : ''
                  }`}
                 
                 onClick={()=>{
                   navigate('/project')
                 }}
              >
                Projects
              </div>

              <div className={`blog nav-elm underline-U cursor-pointer hover:font-light  ${
                    location.pathname === '/blog' ? 'underline-A font-light' : ''
                  }`}
                   
                   onClick={()=>{
                     navigate('/blog')
                   }}
              >
                Blogs
              </div>

              <div className={`carrers nav-elm underline-U cursor-pointer hover:font-light  ${
                    location.pathname === '/carrer' ? 'underline-A font-light' : ''
                  }`}
                  
                   onClick={()=>{
                      navigate('/carrer')
                   }}
              >
                Carrers
              </div>

              <div className={`contact nav-elm underline-U cursor-pointer hover:font-light  ${
                    location.pathname === '/contact' ? 'underline-A font-light' : ''
                  }`}
                 
                   onClick={()=>{
                      navigate('/contact')
                   }}
              >
                Contact
              </div>

            </div>

          </div>

         <button className='bg-transparent w-auto h-auto   text-zinc-800 text-2xl  absolute top-[2.95vw] right-[4vw] hover:text-zinc-500 underlinex'
            
            onClick={()=>{
                toggleNav()
            }}
         >
         Close
         </button>

        </div>

       


      </div>) : (<div className='w-full p-[3vw] flex justify-between items-center text-white bg-transparent  font-medium text-2xl bg-gradient-to-b from-zinc-950 to-transparent z-50'>

        <h3 className='cursor-pointer'>
          Welcome To Future
        </h3>


        <h4 className='flex justify-center items-center cursor-pointer underline-left' onClick={() => {
          toggleNav()
        }}>
          Menu
          <MdMenu size={35} className='pt-1 ' />
        </h4>

      </div>)

    }
  </>
}

export default Navbar
