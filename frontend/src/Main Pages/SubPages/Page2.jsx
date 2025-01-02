import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Page2 = () => {
   

   useGSAP(  ()=>{

    gsap.registerPlugin(ScrollTrigger);



    gsap.from(".heading .comp", {
        width:'10%',
        duration: 3, 
        opacity: 0,
        scrollTrigger:{
            trigger:".page-2",
            scroller:"body",
            start:"top 80%",
            end:"top 10%",
            scrub:2,
        }
        })

    
    // gsap.from(".heading .comp h1", {
    //     y: 100,
    //     duration: 3.5, 
    //     opacity: 0,
    //     scrollTrigger:{
    //         trigger:".page-2",
    //         scroller:"body",
    //         start:"top 80%",
    //         end:"top 10%",
    //         scrub:2,
    //     }
    //     })


    gsap.from(".elem h1", {

        y:150,
        stagger:0.9,
        duration:5,
        opacity:0,
        scrollTrigger:{
            trigger:".page-2",
            scroller:"body",
            start:"top 70%",
            end:"top 10%",
            // markers:true,
            scrub:true
        }
        
    })
  }
  
  )



  return (
    <div className='page-2 w-full h-[100vh] pt-[4vw]'>

     
<div className="heading  px-[2vw] flex justify-center items-center">

<div className="comp px-auto border-b-2 w-11/12  border-black flex justify-center items-center text-[3vw] font-medium text-black ">
<h1 style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className='w-full px-auto text-center'>Our Services</h1>
</div>

</div>
 

<div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className="elem text-[4vw] font-normal text-black pt-[1vw] text-center px-[2vw]">

<h1 className='inline-block'>We  are a digital brand accelerator.We</h1> 
 <h1 className='inline-block'> cdesign and develop market-defining brands</h1>
  <h1 className='inline-block'>through award-winning deliverables. Choose full</h1> 
  <h1 className='inline-block'>cash compensation or offset up to 50% of our</h1>
   <h1 className='inline-block'>for equity in your company. Your vision,</h1> 
    <h1 className='inline-block'>your decisions.</h1>


</div>



    </div>
  )
}

export default Page2