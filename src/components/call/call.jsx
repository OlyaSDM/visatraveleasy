import React, { useState, useEffect } from 'react';
import './call.css';
import call from '../../assets/call.png';

const Call = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = "13476128437"; 

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
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={call} alt="WhatsApp Icon" className="form-toggle" />
            </a>
        </div>
    );
}

export default Call;
