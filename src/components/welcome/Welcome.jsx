import React, { useState, useEffect } from 'react';
import './welcome.css';
import './welcome-adaptive.css';
import { Link } from 'react-scroll';


const Welcome = () => {
    const phoneNumber = "+1 (347) 612 8437";

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
        document.body.classList.toggle('no-scroll', !isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='head'>
            <header>
                <div className="header">
                    {window.innerWidth > 768 ? (
                        <nav className="navbar">
                            <ul className="contt">
                                <li className="li"><Link className="a" to="about" spy={true} smooth={true} offset={-100} duration={500}>ОБО МНЕ</Link></li>
                                <li className="li"><Link className="a" to="services" spy={true} smooth={true} offset={-100} duration={500}>УСЛУГИ</Link></li>
                                <li className="li"><Link className="a" to="benefits" spy={true} smooth={true} offset={-100} duration={500}>ПРЕИМУЩЕСТВА</Link></li>
                                <li className="li"><Link className="a" to="reviews" spy={true} smooth={true} offset={-100} duration={500}>ОТЗЫВЫ</Link></li>
                                <li className="li"><Link className="a" to="contacts" spy={true} smooth={true} offset={-100} duration={500}>КОНТАКТЫ</Link></li>
                            </ul>
                        </nav>
                    ) : (
                        <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                            <div className={`line ${isMenuOpen ? 'line-1' : ''}`}></div>
                            <div className={`line ${isMenuOpen ? 'line-2' : ''}`}></div>
                            <div className={`line ${isMenuOpen ? 'line-3' : ''}`}></div>
                        </div>
                    )}
                </div>
                {window.innerWidth <= 768 && isMenuOpen && (
                    <div className={`burger-menu active`}>
                        <ul>
                            <li><Link className="a a_burgerr" to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleLinkClick}>ОБО МНЕ</Link></li>
                            <li><Link className="a a_burgerr" to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={handleLinkClick}>УСЛУГИ</Link></li>
                            <li><Link className="a a_burgerr" to="benefits" spy={true} smooth={true} offset={-100} duration={500} onClick={handleLinkClick}>ПРЕИМУЩЕСТВА</Link></li>
                            <li><Link className="a a_burgerr" to="reviews" spy={true} smooth={true} offset={-100} duration={500} onClick={handleLinkClick}>ОТЗЫВЫ</Link></li>
                            <li><Link className="a a_burgerr" to="contacts" spy={true} smooth={true} offset={-100} duration={500} onClick={handleLinkClick}>КОНТАКТЫ</Link></li>
                        </ul>
                    </div>
                )}
            </header>
            <div className='text-main'>
                <div className='text'>
                    <p className="first_text">Добро пожаловать на сайт</p>
                    <h1 className="h1_main">VISA TRAVEL EASY!</h1>
                    <div className='second_all'>
                        <p className="third_text">Мы помогаем в оформлении виз в США.</p>
                        <p className="four_text">Более 5 лет опыта и множество успешных кейсов - с нами оформление виз становится простым и быстрым.</p>
                    </div>
                </div>
                <a href={`tel:${phoneNumber}`} >
                <button className="main_btn">СВЯЗАТЬСЯ С НАМИ</button>
                </a>
            </div>
        </div>
    );
};

export default Welcome;