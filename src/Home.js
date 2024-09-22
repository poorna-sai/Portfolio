import React, { useEffect, useState } from 'react';
import latestImage from "./images/latest.jpg";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaJava } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaPython } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiFileCodeLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";


import resume from "./asserts/POORNA SAI PILLA RESUME.pdf"

import './Home.css';


function Home() {
  
  const [current, setCurrentChildIndex] = useState(1);


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const elementsToObserve = document.querySelectorAll('.hidden' , 'hiddenn');
    
    elementsToObserve.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, []);



  return (
    <div className="Home">
      {/* --------------------------------------Main Banner and content ------------------------------ */}
      <div id="home"></div>
      <div className="main-content " >
        <div className="banner-img hidden">
          <img src={latestImage} alt="Banner" />
        </div>
        <div className="headlines">
          <div className='Hello'>Hello, I'm  &nbsp; <span className='name-span'> Poorna Sai</span> </div>
          
          <h2>Web Developer & </h2> 
          <h2>Technical Trainer</h2>
          {/* <button>Download Resume</button> */}
          <p className='banner-text'>"Experienced Web Developer and Technical Mentor: Crafting digital solutions with code and guiding aspiring developers towards success."</p>
          <div className="socialmedia">
          <a href='https://github.com/poorna-sai' target='_blank' className='socialmedialinks'>  <FaGithub /></a>
          
          <a href='Mailto:poornasai143pilla@gmail.com' className='socialmedialinks' target='_blank'>  <CgMail /></a>
          <a href='https://www.linkedin.com/in/poorna-sai-pilla-755878243' className='socialmedialinks' target='_blank'>  <FaLinkedin /></a>
          </div>
          <div className='resume'>
            <a className='resume-btn' href={resume} download='resume'>Download Resume</a>
          </div>
        </div>
      </div>

      {/*-------------------------------------------------- About ------------------------------- */}
      
      <div className="about-section" id="about-section">
     
        
        <div className="about-text" >
        <center><h1 id="about" className='about'> About </h1></center>
         <p className='hidden about-content '> As a DSA - Technical Mentor at FacePrep, I help students master Data Structures and Algorithms, enhancing their
          problem-solving skills and preparing them for technical interviews. I design and deliver engaging technical content
          and coding challenges, conduct regular workshops and webinars, and provide one-on-one guidance and feedback. I
          also collaborate with a team of educators to develop effective learning materials and contribute to the improvement of
          the curriculum and course content.</p>
        </div>
      </div>
      
      {/*--------------------------------skills ----------------------------------- */}
      <div id='skills'></div>
     
      <div  className='skills-section' id ="skills-section">
   <div  className='skillshead'>   <center><h1 id = "skills">My Skills</h1></center></div>
   <div className='skills-container'>
        <div className='skills hidden'>
        <FaJava /> <h5>Java</h5>
          </div>
          <div className='skills hidden'>
          <FaPython /> <h5>Python</h5>
          </div>
          <div className='skills hidden'>
          <TbBrandCpp /> <h5> &nbsp;C++</h5>
          </div>
          <div className='skills hidden'>
          <RiFileCodeLine /> <h5> DSA</h5>
          </div>
          <div className='skills hidden'>
          <RiReactjsLine /> <h5>React</h5>
          </div>

          <div className='skills hidden'>
          <DiJavascript /> <h5>JavaScript</h5>
          </div>
          <div className='skills hidden'>
          <FaHtml5 /> <h5>Html5</h5>
          </div>
           <div className='skills hidden'>
           <FaCss3Alt /> <h5>Css3</h5>
          </div> 
          <div className='skills hidden'>
            <h5>SQL</h5>
          </div> 
          <div className='skills hidden'>
            <h5>Git</h5>
          </div>  

        </div>
      </div>
            {/* --------------------------experience ------------------------------------ */}

<div className="design-section">
<center> <h1 id='experience'> Experience</h1></center>
<div className="timeline">

    <div className="timeline-empty"> </div>

       <div className="timeline-middle">
          <div className="timeline-circle"></div> </div>
              <div className="timeline-component timeline-content hidden">
                <h3>Technical Trainer </h3>
                <h4 className='dates'>March-2023 - Nov-2023 </h4>
                <p>Crafting digital solutions with code and guiding aspiring developers towards success.</p>
           </div>
           
                <div className="timeline-component timeline-content hidden">
                <h3>Assistant Proffessor </h3>
                <h4 className='dates'>Dec-2023 - April-2023 </h4>
                <p> From code to creation: I translate ideas into digital realities and guide aspiring developers on their journeys.</p>
                </div>


                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>


                <div className="timeline-empty">
                </div>

                <div className="timeline-empty">
                </div>

                
{/* ============================================================ */}
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className="timeline-component timeline-content hidden">
                <h3>Software Developer </h3>
                <h4 className='dates'>April-2023 - Current </h4>
                <p>I harness my skills to deliver optimal solutions by nimbly adapting to emerging technologies.</p>
           </div>
                


       </div>
    </div> 
{/* -----------------------Projects---------------------------------------- */}
<div id='projects'></div>
    
<div className='projects-container fade-content'>

  <div className='projects'> <center><h1>Projects</h1></center></div>
 
      <div className='cards' id='cardsid' >
        
          <div className='project-card'>
          <div className='project-title'><h2>Complaint Managemnt System</h2></div>
            
            <p className='project-description'> Streamline your complaints! Submit issues directly through our user-friendly portal. Attach photos, videos, or documents for clear evidence.
             The system routes your complaint to the right person for faster resolution. Track the progress of your complaint every step of the way, ensuring your voice is heard and addressed  </p>
            <div className='project-url'><a href='https://github.com/poorna-sai/Complaint_Mangement_system'> Source Code <FaExternalLinkAlt />  </a></div>
          </div>
          <div className='project-card'>
          <div className='project-title'><h2>Page of Memories </h2></div>
            
            <p className='project-description'>Build your own digital scrapbook! This project lets you capture your experiences with text, photos, and even videos. It's like an online diary that supports all sorts of media, making it easy to store and relive your memories. 
             Built with Python, Django, JavaScript, and Bootstrap, this project is your gateway to keeping your past moments close at hand.</p>
            <div className='project-url'><a href='https://github.com/poorna-sai/Page_of_Memories'> Source Code <FaExternalLinkAlt />  </a></div>
          </div>
          
          

          <div className='project-card'>
          <div className='project-title'><h2>IT Infra </h2></div>
           
            <p className='project-description'> Complaint management System is allows the user to intreactive complaining serviese 
            through the portal we raise the complaint and track the complaint also. 
            We ca use this complaint management system to manage the compalaints</p>
            <div className='project-url'><a href='https://github.com/poorna-sai/ItInfra'> Source Code <FaExternalLinkAlt />  </a></div>
          </div>
        
      </div>
      <div className='steps'>
      <i className='step'><GrCaretPrevious /></i>
      <i className='step' onClick={()=>{
        const parentElement = document.querySelector('.cards');
        parentElement.childNodes.forEach((child)=>{
          child.style.display="none";
        })
        parentElement.childNodes[current].style.display="block";
        
        setCurrentChildIndex(current => (current + 1) % parentElement.childNodes.length)
        
      
      }}> <GrCaretNext /></i>
        </div>

</div>


      {/* -------------------------------------contact----------------------------------- */}
      <div id='contact'></div>
   
      <div className='contact-container'>
      <div className='contact'><center>  <h3>Let's make a conversation </h3></center></div>
        <div className='contact-head'>
          <h2>Contact Me</h2>
        </div>
          <div className='form-container'>
            <form className='form'>
              <input type='text' name='firstname' className='text' placeholder='First Name'/ >
              <input type='text' name='lastname' className='text' placeholder='Last Name' />
              <input type='email' name='email' className='email' placeholder='E-Mail' />
              <textarea  name='message' className='textarea' placeholder='Message  . .. '>
              </textarea>
            </form>
          </div>
      </div>
      {/* ------------------------------footer -------------------------------------------- */}
      <div className='footer-container'>
        <div className='footer-content'>
            <h2>Get in Touch</h2>
            <div className='gmail'><CgMail /> <a className='contact-details' href='mailto:poornasai143pilla@gmail.com'>poornasai143pilla@gmail.com</a> </div>
            <div className='phone'><FaPhoneAlt /> <a  className='contact-details' href='tel:+919182243018'>+91 9182243018</a></div>
        </div>
        <div className='footer-socialmedia'>
          <a href='https://github.com/poorna-sai' target='_blank' className='socialmedialinks'>  <FaGithub /></a>
          
          <a href='Mailto:poornasai143pilla@gmail.com' className='socialmedialinks' target='_blank'>  <CgMail /></a>
          <a href='https://www.linkedin.com/in/poorna-sai-pilla-755878243' className='socialmedialinks' target='_blank'>  <FaLinkedin /></a>
        </div>
        <div className='copyrighth'> <center> Developed by Poorna Sai Pilla @2024 </center></div>
      </div>
    </div>
  );
}

export default Home;
