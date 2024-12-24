import React, { useState, useEffect } from 'react';
import './top.css';
import top from '..//..//assets/top.png';

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 550);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='top-form-container'>
      <button 
        className={`top-toggle ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <img src={top} alt='Scroll to top' width={18} height={14} />
      </button>
    </div>
  );
};

export default Top;
