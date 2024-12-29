import './benefits.css';
import './benefits-adaptive.css';
import React from 'react';
import icon1 from '..//..//assets/icon1.png';
import icon2 from '..//..//assets/icon2.png';
import icon3 from '..//..//assets/icon3.png';

const Benefits = () => {
    return (
        <div>
            <section id="benefits" className="section_benefits">
                <div className="content_benefits">
                <h1 className='h1-benefits'>наши <b className='b'>преимущества</b></h1>
                    <div className="wrap">
                        <div className="cards">
                            <div className="card_benefits">
                                <img className='icon' src={icon1} alt="icon" />
                                <h3 className="text_b">Профессиональный опыт</h3>
                            </div>
                            <div className="card_benefits">
                                <img className='icon' src={icon2} alt="icon" />
                                <h3 className="text_b">Индивидуальный подход</h3>
                            </div>
                            <div className="card_benefits">
                                <img className='icon' src={icon3} alt="icon" />
                                <h3 className="text_b">Полная поддержка на всех этапах</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Benefits;
