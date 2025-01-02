import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useGSAP } from '@gsap/react'
import gsap  from 'gsap'
import axiosInstance from '../../utils/axiosinstance'
import { MdArrowForwardIos } from 'react-icons/md';



gsap.registerPlugin(ScrollTrigger);





const Page4 = () => {

    const navigate  = useNavigate()


   const [latestProject,setLatestProject] = useState(null)
  
    const [showMorepDesc, setShowMorepDesc] = useState(false)

    const projectDescRef = useRef(null); 
    
    const isManualScrollRef = useRef(false); 
    
    const getLatestProject = async()=>{

        try{

            const response = await axiosInstance.get("/get-latest-project")

            if(response.data && response.data.latestproject){

                setLatestProject(response.data.latestproject)
            }

            setTimeout(() => {
              ScrollTrigger.refresh();
          }, 100);

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


    const handleToggleDescription = () => {
      isManualScrollRef.current = true; // Mark as manual interaction
      setShowMorepDesc((prev) => !prev);
    };
    
    useEffect(() => {
      // Ensure scroll only happens on user interaction
    
      if (isManualScrollRef.current && projectDescRef.current) {
        // Add slight delay to stabilize scroll after DOM updates
        setTimeout(() => {
          projectDescRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          isManualScrollRef.current = false; // Reset manual interaction flag
        }, 100); // Adjust delay as needed
      }

    }, [showMorepDesc]);
      



    const handleReadMorepDesc = () => {
      
      setShowMorepDesc(true)

      projectDescRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    }
    const handleReadLesspDesc = () => {
      
      setShowMorepDesc(false)

      projectDescRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    }




    useGSAP(()=>{




    gsap.from('.page-4 .elem',{
  
        y:80,
        duration:2,
        stagger:0.6,
        opacity:0,
        scrollTrigger:{

             trigger:".page-4",
             scroller:"body",
             start:"top 70%",
            end:"top 0%",
             scrub:0.2,
        }
        
    })

  

})

   
  

  return (
    <div   style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}  className='page-4 mx-5 w-full min-h-[100vh] px-[5vw]  flex justify-start items-center flex-col pb-[5vw] gsp-[2vw]'>


      <div className="page4-text min-h[90] flex justify-center items-center flex-col pb-[3vw]">

      <div className="projecttitle elem text-center text-[2.5vw] font-medium underline">

      {latestProject && latestProject.pTitle.toUpperCase() }


      </div>

      <div ref={projectDescRef}   style={{ whiteSpace: "pre-wrap" }}  className="projectdesc elem text-center text-[3vw] font-normal flex  items-center flex-col justify-around">
        {latestProject && (
          <>
            {showMorepDesc
              ? `${latestProject.pDesc.substring(0, 1000)}....`
              : `${latestProject.pDesc.substring(0, 350)}...`}
          </>
        )}


         {latestProject && latestProject.pDesc.length > 350 && (
        <button
          className=" text- font-medium py-2  text-[1.5vw] px-4 rounded-lg  underline"

          onClick={() => {
            showMorepDesc ? handleReadLesspDesc() : handleReadMorepDesc();
          }}
        
        >
          {showMorepDesc ? 'Read Less↑' : 'Read More↓'}
        </button>
      )}
     
      </div>


      </div>

      <div className="moreprojects   w-full flex justify-center items-center flex-col pb-[3vw]">
         
         <button className="elem text-[2vw] font-medium py-2 px-4 rounded-lg border border-black flex justify-center items-center"
         
          onClick={()=>{
            navigate('/project')
          }}
         
         > Explore More Projects
        <MdArrowForwardIos  className='pt-1'/>
         </button>
          

      </div>


    </div>
  )
}

export default Page4