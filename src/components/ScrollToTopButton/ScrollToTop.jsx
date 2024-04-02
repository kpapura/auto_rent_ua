import React, { useState, useEffect } from 'react';
import { FaAnglesUp } from "react-icons/fa6";
import s from "./ScrollToTopButton.module.css"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className={s.scrollTo}>
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
        <FaAnglesUp style={{width:"50px", height:"30px", color:"white"}} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
