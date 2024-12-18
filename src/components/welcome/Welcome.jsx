import React, { useState, useEffect } from 'react';
import './welcome.css';
import './welcome-adaptive.css';

const Welcome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('no-scroll', !isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('no-scroll');
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
                                <li className="li"><a className="a">ОБО МНЕ</a></li>
                                <li className="li"><a className="a">УСЛУГИ</a></li>
                                <li className="li"><a className="a">ПРЕИМУЩЕСТВА</a></li>
                                <li className="li"><a className="a">ОТЗЫВЫ</a></li>
                                <li className="li"><a className="a">КОНТАКТЫ</a></li>
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
                            <li><a href="" className="menu-link" onClick={closeMenu}>ОБО МНЕ</a></li>
                            <li><a href="#about" className="menu-link" onClick={closeMenu}>УСЛУГИ</a></li>
                            <li><a href="#best" className="menu-link" onClick={closeMenu}>ПРЕИМУЩЕСТВА</a></li>
                            <li><a href="#footer" className="menu-link" onClick={closeMenu}>ОТЗЫВЫ</a></li>
                            <li><a href="#footer" className="menu-link" onClick={closeMenu}>КОНТАКТЫ</a></li>
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
                <button className="main_btn">СВЯЗАТЬСЯ С НАМИ</button>
            </div>
        </div>
    );
};

export default Welcome;
