import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './welcome.css';
import './welcome-adaptive.css';

const Welcome = () => {
  const phoneNumber = '+1 (347) 612 8437';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const mobile = window.innerWidth <= 768;
        setIsMobile(mobile);
        if (!mobile) closeMenu();
      }, 150);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="head">
      <Helmet>
        <title>VISA TRAVEL EASY – Помощь в оформлении виз</title>
        <meta name="description" content="Помощь в получении виз: США, Шенген, Великобритания, Япония. Легко, быстро и надёжно." />
        <meta property="og:title" content="VISA TRAVEL EASY" />
        <meta property="og:description" content="Быстрая и профессиональная помощь в получении виз. Более 5 лет опыта." />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="ru" />
        <link rel="preload" as="style" href="/welcome.css" />
        <link rel="stylesheet" href="/welcome.css" />
        <link rel="preload" as="style" href="/welcome-adaptive.css" />
        <link rel="stylesheet" href="/welcome-adaptive.css" />
      </Helmet>

      <header className="header">
        {isMobile ? (
          <div className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? 'line-1' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'line-2' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'line-3' : ''}`}></div>
          </div>
        ) : (
          <nav className="navbar">
            <ul className="contt">
              <li className="li"><a className="a" href="#about">ОБО МНЕ</a></li>
              <li className="li"><a className="a" href="#services">УСЛУГИ</a></li>
              <li className="li"><a className="a" href="#reviews">ОТЗЫВЫ</a></li>
              <li className="li"><a className="a" href="#contacts">КОНТАКТЫ</a></li>
            </ul>
          </nav>
        )}

        {isMobile && isMenuOpen && (
          <div className="burger-menu active">
            <ul>
              <li className="a_burgerr"><a className="a_burgerr" href="#about" onClick={closeMenu}>ОБО МНЕ</a></li>
              <li className="a_burgerr"><a className="a_burgerr" href="#services" onClick={closeMenu}>УСЛУГИ</a></li>
              <li className="a_burgerr"><a className="a_burgerr" href="#reviews" onClick={closeMenu}>ОТЗЫВЫ</a></li>
              <li className="a_burgerr"><a className="a_burgerr" href="#contacts" onClick={closeMenu}>КОНТАКТЫ</a></li>
            </ul>
          </div>
        )}
      </header>

      <main className="text-main">
        <section className="text">
          <h1 className="h1_main">VISA TRAVEL EASY!</h1>
          <div className="second_all">
            <p className="third_text">
              США, Шенген, Великобритания, Япония
            </p>
            <p className="four_text">
              Подскажем, поможем, оформим!
            </p>
          </div>
          <a href="https://wa.me/13476128437" target="_blank" rel="noopener noreferrer">
            <button className="main_btn">СВЯЗАТЬСЯ С НАМИ</button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Welcome;
