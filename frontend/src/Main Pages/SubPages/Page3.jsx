import React,{useState,useEffect} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import axiosInstance from '../../utils/axiosinstance'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {

  const [latestProject,setLatestProject] = useState(null)

  const [showMorepDesc, setShowMorepDesc] = useState(false)
 



    const getLatestProject = async()=>{

        try{

            const response = await axiosInstance.get("/get-latest-project")

            if(response.data && response.data.latestproject){

                setLatestProject(response.data.latestproject)
            }

        }

        catch(error){
              console.log("Error in getting latest project")    
        }
    }
   

    useEffect(() => {
      getLatestProject()
    
      return () => {
    
      }
    }, [])
    

    useEffect(() => {
      // Refresh ScrollTrigger after state change
      ScrollTrigger.refresh();
    }, [showMorepDesc]);


    const handleReadMorepDesc = () => setShowMorepDesc(true);
    const handleReadLesspDesc = () => setShowMorepDesc(false);


  
    useGSAP(()=>{



       gsap.from('.page3-elements .box img',{
  
           y:250,
           duration:5,
           delay:5,
           scrollTrigger:{

                trigger:".page-3",
                scroller:"body",
                start:"top 90%",
                end:"bottom 90%",
                scrub:true,
           }
           
       })
         

        gsap.from("#page3-top h4",{
            x:150,
            duration:2,
            opacity:0,
            scrollTrigger:{
                trigger:".page-3",
                scroller:"body",
                start:"top 80%",
                end:"top 10%",
                scrub:true,
            }
        })


        gsap.from("#page3-top h2",{

            y:120,
            duration:2,
            opacity:0,
            scrollTrigger:{

                trigger:".page-3",
                scroller:"body",
                start:"top 60%",
                end:"top 0%",
                scrub:true,

            }
        })
    })

  return (
    <div className='page-3 w-full min-h-[100vh] pt-[5vw] pb-[5vw] max-w-[100%] overflow-hidden'>

       
     <div id="page3-top" style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className=' w-full mx-auto text-center  pb-[2vw]'>

     <h4 className='mb-[1vw] text-[1.4vw] font-medium'>Projects & Blogs <span className='text-[0.8vw] bg-gradient-to-r from-zinc-800 to-black text-white rounded-lg py-1 px-3'>Explore</span>↵</h4>

    <h2 className='text-[3.5vw] font-normal text-black pt-[1vw] text-center px-[2vw] underline'> Our Latest Project </h2>

    </div>


    <div className="page3-elements max-h-[50vh] w-[100%] flex justify-evenly items-center mt-[5vw] pt-7 mb-10">

        <div className="box max-h-full">
          <img src={ latestProject &&  latestProject.pImgs[latestProject.pImgs.length-1]} alt="Img" className='max-h-full' />
        </div>

        <div className="box max-h-full">

            <img src={  latestProject &&   latestProject.pImgs[latestProject.pImgs.length-2]}  alt="Img" className='max-h-full' />

        </div>

        <div className="box max-h-full">
              <img src={   latestProject && 
                    latestProject.pImgs[latestProject.pImgs.length-3]
              } alt="Img" className='max-h-full' />
        </div>
    </div>


    
     
        

   

    </div>
  )
}

export default Page3