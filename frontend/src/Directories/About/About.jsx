import React,{useEffect} from 'react'
import Navbar from  '../../Components/Navbar'
import Headroom from 'react-headroom'
import Footer from '../../Components/Footer'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';



gsap.registerPlugin(ScrollTrigger);

const About = () => {


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
    <h1 className="text-6xl underline">About Us</h1>
    <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className="Blogs w-5/6 my-12 mx-auto pt-6 pb-12 px-3 flex justify-around items-center flex-wrap gap-9">
                    
    

     <div className="card1 w-full flex justify-around">
    
       <div className="img1 w-[35vw] h-[35vw] bg-slate-600">
          <img src="../../src/assets/image3x.jpg" alt="" className='w-full h-full object-cover' />
       </div>

       <div className="txt1 text-start w-[40vw] h-[35vw] overflow-hidden flex justify-center items-start text-4xl flex-col">

           <h1 className='underline font-medium'>
            About us
           </h1>

           <p>
           We are a robotics agency that provide some services to the people and people are excited to get our services ,I know iknow that i sound silly but i am just trying to fill the space with some text so that.
           </p>
       </div>

     </div>


     
     <div className="card2 w-full flex justify-around">
    
       

       <div    className="txt1 text-start w-[40vw] h-[35vw] overflow-hidden flex justify-center items-start text-4xl flex-col">
          <h1 className='underline font-medium'>
            What we do.
           </h1>

          <p>
           We are a robotics agency that provide some services to the people and people are excited to get our services ,I know iknow that i sound silly but i am just trying to fill the space with some text so that.
           </p>

       </div>

       <div className="img2 w-[35vw] h-[35vw] bg-slate-600">
        
          <img src="../../src/assets/lmage3.jpg" alt=""  className='w-full h-full object-cover' />
       </div>

     </div>


      


     <div className="serve w-75vw text-4xl mt-10">

     <h1 className='underline font-medium'>
        Our Services
           </h1>

     We  are a digital brand accelerator. We design and develop market-defining brands through award-winning deliverables. Choose full cash compensation or offset up to 50% of our for equity in your company. Your vision, your decisions.
     </div>


    </div>
    </div>
       
      <Footer/>
    </>
}

export default About