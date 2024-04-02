import React from 'react'

import { RiServiceLine } from "react-icons/ri";
import { FaCar } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

import s from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={s.main}>
      <div>
        <div className={s.imageBox}>
          <div className={s.downBox}>
          <h1 className={s.title}>15 years of experience</h1>
          <FaAnglesDown style={{width:"50px", height:"50px"}}  />
          </div>
          <div className={s.desc}>
            <p className={s.history}>Over 15 years of successful operation, we continuously refine our services, incorporating new technologies and innovative approaches. We stay abreast of industry trends, always seeking to expand opportunities for our clients.</p>
          
          <div className={s.addInfo}>
          <span className={s.line}></span>
           <p className={s.upperCase}>15+<br /><span>Years of experience</span> </p>
           <p className={s.upperCase}>500+<br /><span>Car models</span></p>    
          </div> 
          </div>
        </div>
        <div>
        <div className={s.advantages}>
        <ul className={s.list}>
          <li>
        <RiServiceLine style={{width:"50px", height:"50px"}} />
        <h3>Exceptional Customer Service</h3>  
        <p>We pride ourselves on delivering unparalleled customer service that goes above and beyond expectations.</p>   
          </li>
          
          <li>
        <FaCar style={{width:"50px", height:"50px"}}/>
        <h3>Extensive Vehicle Selection</h3>  
        <p>What sets us apart from other rental companies is our extensive selection of vehicles, ranging from economy cars to luxury sedans and everything in between.</p> 
          </li>
         
          <li>
        <TbPigMoney style={{width:"50px", height:"50px"}}/>
        <h3>Transparent and Competitive Pricing</h3>  
        <p>Our pricing structure is straightforward and transparent, providing customers with clarity and confidence in their rental decisions. </p> 
          </li>
        </ul>   
        </div>
        <div className={s.contact}>
        <p>Follow us at:</p> 
        <div className={s.social}>
        <FaInstagram style={{width:"50px", height:"50px"}} />
        <FaFacebookSquare style={{width:"50px", height:"50px"}}/>
        <FaTelegramPlane style={{width:"50px", height:"50px"}}/>
        </div>      
       </div>
      </div>
     </div>  
    </div>
  )
}

export default HomePage