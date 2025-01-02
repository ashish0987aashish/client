import React,{useEffect,useState} from 'react'
import Navbar from  '../../Components/Navbar'
import Headroom from 'react-headroom'
import Footer from '../../Components/Footer'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { 
  IoCall, 
  IoMail, 
  IoLogoWhatsapp, 
  IoLocationSharp 
} from 'react-icons/io5';




gsap.registerPlugin(ScrollTrigger);

const Contact = () => {


     
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

   
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
        <h1 className="text-6xl underline">Contact</h1>
        <div style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} className=" w-full p-8  flex justify-center items-center"> 

    <div id="contact" className='w-[32vw] h-[30vw] border-r-2 border-[#888] '>
      <form
        className='flex w-full h-full flex-col gap-[1vw] p-[2vw] '
      action="https://formspree.io/f/manwkpyj" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            name
          </label>
          <input
            className='h-11 pl-4 w-10/12 rounded-lg border border-[#474343] bg-[rgb(255_250_246)]'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Fullname"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            className='h-11 pl-4 w-10/12 rounded-lg border border-[#474343] bg-[rgb(255_250_246)]'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
              className=' py-3 pl-4 resize-none h-40 w-10/12 rounded-lg border border-[#474343] bg-[rgb(255_250_246)]'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <input className="hover btn border border-black  w-24 m-auto rounded-lg py-1 cursor-pointer text-zinc-800 shadow-xl hover:scale-105 active:translate-y-0.5 active:shadow-lg" type="submit" value="Send"
        />
      </form>

  
     </div>

     <div className="address w-[32vw]  h-[30vw]  flex flex-col justify-start gap-7 pt-10">



      <div className='h-9 text-lg  flex pl-14'>

         <a className='flex justify-center items-center text-xl'target="_blank" href="callto:+919827221186"> <IoCall size={30}/> +91 9827221186   </a>    
      </div>

      <div className='h-9 text-lg   flex pl-14'>

         <a className='flex justify-center items-center text-xl' target="_blank" href="mailto:mainemailashish@gmail.com"><IoMail size={30}/>mainemailashish@gmail.com</a>
      </div>

      <div className='h-9 text-lg  flex pl-14'>
        <a className='flex justify-center items-center text-xl' target="_blank" href="whatsapp://send?phone=+916371004685"><IoLogoWhatsapp size={30}/>+91 6371004685</a>

      </div>

      <div className='h-9 text-lg  flex pl-14  '>
        <a className='flex justify-center items-center text-xl' target="_blank" href="https://maps.app.goo.gl/vGPa3zQk6m9BwFoQ6 "><IoLocationSharp size={30}/>Nuapatana,Narasinghpur Odisha</a>
           
      </div>

    </div>


    
     </div>
 

    </div>   
                        

    <Footer/>
    </>
}

export default Contact