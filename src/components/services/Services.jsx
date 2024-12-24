import './services.css';
import './services-adaptive.css';
import React from 'react';
import icon1 from '..//..//assets/icon1.png';
import icon2 from '..//..//assets/icon2.png';
import icon3 from '..//..//assets/icon3.png';

const Services = () => {
    return (
        <div>
            <section id="services" className="section_services">
                <div className="content_services">
                    <h1 className='h1-benefits'>наши <b className='b'>услуги</b></h1>
                    <div className="wrap">
                        <div className="cards">
                            <div className="card">
                                <div className="img">
                                    <div className='img_name'>
                                        <p className='name_card'>Туристические визы</p>
                                        <p className='name_b'>b1/b2</p>
                                    </div>
                                </div>
                                <div className="text_services">
                                    <p className="text_s">Мы помогаем оформить туристическую визу в США. Поддержим на каждом этапе: от заполнения анкеты до подготовки к собеседованию.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img_2">
                                    <div className='img_name'>
                                        <p className='name_card'>Студенческие визы</p>
                                        <p className='name_b'>F1/F2</p>
                                    </div>
                                </div>
                                <div className="text_services">
                                    <p className="text_s">Получение студенческой визы требует тщательной подготовки. Мы поможем вам с документами и расскажем, как успешно пройти интервью в консульстве.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img_3">
                                    <div className='img_name'>
                                        <p className='name_card'>визовые</p>
                                        <p className='name_b'>консультации</p>
                                    </div>
                                </div>
                                <div className="text_services">
                                    <p className="text_s">Если вы только планируете подачу на визу и не знаете, с чего начать, наша консультация - первый шаг к успеху. Мы обсудим ваши цели и предложим оптимальные решения.</p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img_4">
                                    <div className='img_name'>
                                        <p className='name_card'>помощь в сборе</p>
                                        <p className='name_b'>документов</p>
                                    </div>
                                </div>
                                <div className="text_services">
                                    <p className="text_s">Мы помогаем оформить туристическую визу в США. Поддержим на каждом этапе: от заполнения анкеты до подготовки к собеседованию.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

export default Services;
