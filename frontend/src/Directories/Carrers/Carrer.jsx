import React,{useEffect} from 'react'
import Navbar from  '../../Components/Navbar'
import Headroom from 'react-headroom'
import Footer from '../../Components/Footer'
import { MdSearchOff } from 'react-icons/md';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger);


const Carrer = () => {

   
       const refreshScrollTrigger = () => {
         setTimeout(() => {
           ScrollTrigger.refresh();
        }, 100);
          
       }
     
   
      
   
   
   useEffect(() => {
     refreshScrollTrigger()
   
     return () => {
       
     }
   }, [])
   

  return <>
      <Headroom>
        <Navbar/>
      </Headroom>

      <div className='text-center min-h-[100vh] '>
    <h1 className="text-6xl underline">Carrers</h1>
    <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className="Blogs w-5/6 my-12 mx-auto pt-6 pb-12 px-3 flex justify-center items-center flex-wrap gap-9 flex-col">

        <MdSearchOff size={35}/>

       <div className='text-5xl'>No Job is available yet</div>
      
     </div>
     </div>   
                    
    <Footer/>
    </>
}

export default Carrer