import React,{useRef,useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { use } from 'react'
import Headroom from 'react-headroom'


const Hero = () => {

  
  
  
  useGSAP(()=>{
    
    const tl = gsap.timeline()
    
    tl.from('.hero-content h1 span',{
      y:100,
      opacity:0,
      duration:0.5,
      stagger:0.1,
    })
    
    return tl
     
    
  }) 




  return (
    <div className='w-full h-[100vh] relative bg-zinc-900'>
     
      <video muted autoPlay loop className='object-cover absolute w-full h-full' src="../src/assets/heroImg.mp4"></video>
           
      <div className="hero-content  h-full w-full flex  items-center text-white flex-col relative z-10">
      
      {/* <Headroom className='w-full z-50' >
      <Navbar className='z-50 absolute' />
      </Headroom>   */}
     

    <h1 className='text-[17vw] font-bold z-20 absolute bottom-[1vw]'>

      <span className='inline-block'>M</span>
      <span className='inline-block'>y</span> 
      <span className='inline-block'>W</span>
      <span className='inline-block'>e</span>
      <span className='inline-block'>b</span>
      <span className='inline-block'>s</span>
      <span className='inline-block'>i</span>
      <span className='inline-block'>t</span>
      <span className='inline-block'>e</span>

    </h1>

      </div>


    </div>
  )
}

export default Hero