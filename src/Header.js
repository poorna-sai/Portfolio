// import { Link } from "react-router-dom";
import { FaAlignJustify ,FaWindowClose  } from "react-icons/fa";
import './Header.css';
function Header()
{
 
  return (


    <div className="Header">
      <div className='title'>
      <h2> Poorna </h2>
      </div>
      
      <div className="open-menu" >
        
   <FaAlignJustify   onClick={(e) =>{
      
      document.querySelector('.nav-container').style.marginRight = "0%";
      document.querySelector('.open-menu').style.display = "none";
      
      

      
   }}/>
   
   </div>
   <div className="nav-container">
   
   <FaWindowClose  className='close-menu' onClick={(event) =>{
      
      document.querySelector('.nav-container').style.marginRight = "-100%";
      document.querySelector('.open-menu').style.display = "block";
    
   }}/>
  
  
        <ul>
        <li> <a href="#home"> Home</a> </li>
         <li> <a href="#about-section"> About</a> </li>
         <li> <a href="#skills-section"> Skills</a> </li>
         <li> <a href="#experience"> Experience</a> </li>
         <li> <a href="#projects"> Projects</a> </li>
         <li> <a href="#contact"> Contact</a> </li>

        </ul>
      </div>
    </div>
    
  )
}
export default Header;