import React,{useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom'

import { useGSAP } from '@gsap/react'
import gsap  from 'gsap'
import axiosInstance from '../../utils/axiosinstance'
import { MdArrowForwardIos } from 'react-icons/md';








const Page5 = () => {


  const navigate = useNavigate()


   const [latestBlog,setLatestBlog] = useState(null)
  
    const [showMorepDesc, setShowMorepDesc] = useState(false)

    const DescRef = useRef(null); 
    
    const isManualScrollRef = useRef(false); 
    
    const getLatestBlog = async()=>{

        try{

            const response = await axiosInstance.get("/get-latest-blog")

            if(response.data && response.data.latestblog){

                setLatestBlog(response.data.latestblog)
      
            }

        }

        catch(error){
              console.log("Error in getting latest blog")    
        }
    }
   

    useEffect(() => {
      getLatestBlog()
    
      return () => {
    
      }
    }, [])


    const handleToggleDescription = () => {
      isManualScrollRef.current = true; // Mark as manual interaction
      setShowMorepDesc((prev) => !prev);
    };
    
    useEffect(() => {
      // Ensure scroll only happens on user interaction
    
      if (isManualScrollRef.current && DescRef.current) {
        // Add slight delay to stabilize scroll after DOM updates
        setTimeout(() => {
          DescRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          isManualScrollRef.current = false; // Reset manual interaction flag
        }, 100); // Adjust delay as needed
      }

    }, [showMorepDesc]);
      



    const handleReadMorepDesc = () => {
      
      setShowMorepDesc(true)

      DescRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    }
    const handleReadLesspDesc = () => {
      
      setShowMorepDesc(false)

      DescRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    }




    useGSAP(()=>{


      gsap.from(".page-5-head h2",{

        y:120,
        duration:2,
        opacity:0,
        scrollTrigger:{

            trigger:".page-5",
            scroller:"body",
            start:"top 80%",
            end:"top 20%",
            scrub:true,

        }})



    gsap.from('.page-5 .elem',{
  
        y:120,
        duration:2,
        stagger:0.6,
        opacity:0,
        scrollTrigger:{

             trigger:".page-5",
             scroller:"body",
             start:"top 70%",
            end:"top 10%",
             scrub:0.2,
        }
        
    })

  

})

   
  

  return (

   < div className='page-5-head'>

<h2  style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}  className='text-[3.2vw] font-normal text-black py-[1vw] text-center px-[2vw] underline'> Our Latest Blog </h2>



    <div  style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}  className='page-5 mx-5 w-full min-h-[95vh] px-[5vw]  flex justify-start items-center flex-col pb-[5vw] gsp-[2vw] relative'>


      <div className="page4-text min-h[90] flex justify-center items-center flex-col pb-[3vw]">

      <h2 className="projecttitle   text-[2.1vw] font-medium underline absolute top-1 left-[7vw]">

      {latestBlog && latestBlog.bTitle.toUpperCase() }


      </h2>

      <div  ref={DescRef} style={{ whiteSpace: "pre-wrap" }}  className="projectdesc elem text-center text-[2.6vw] font-normal flex  items-center flex-col justify-around pt-14">
        {latestBlog && (
          <>
            {showMorepDesc
              ? `${latestBlog.bDesc.substring(0, 1000)}....`
              : `${latestBlog.bDesc.substring(0, 350)}...`}
          </>
        )}


         {latestBlog && latestBlog.bDesc.length > 350 && (
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
              navigate('/blog')      
           }}
           
         > Explore More Blogs
        <MdArrowForwardIos  className='pt-1'/>
         </button>
          

      </div>


    </div>

    </div>
  )
}

export default Page5