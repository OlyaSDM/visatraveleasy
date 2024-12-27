import React, { useState, useEffect } from 'react';
import './call.css';
import call from '..//..//assets/call.png';

const Call = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = "+1 (347) 612 8437"; 

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 450);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="call-container" style={{ display: isVisible ? 'block' : 'none' }}>
            <a href={`tel:${phoneNumber}`}>
                <img src={call} alt="Call Icon" className="form-toggle" />
            </a>
        </div>
    );
}

export default Call;
