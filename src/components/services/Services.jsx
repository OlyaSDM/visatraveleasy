import './services.css';
import './services-adaptive.css';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { visaModalData } from '../visaModalData';

const Services = () => {
  const [modalIndex, setModalIndex] = useState(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [showAllFaq, setShowAllFaq] = useState(false);

  const openModal = (index) => {
    setModalIndex(index);
    setShowAllFaq(false);
    setActiveFaqIndex(null);
  };

  const closeModal = () => setModalIndex(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.faq-item')) {
        setActiveFaqIndex(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Услуги по оформлению виз в США | Туристические, студенческие, консультации</title>
        <meta name="description" content="Мы предлагаем помощь в оформлении виз в США: туристические визы B1/B2, студенческие F1/F2, Шенген, Великобритания, Япония." />
        <meta name="keywords" content="виза в США, туристическая виза, студенческая виза, визовая консультация, оформление визы, Шенген, Великобритания, Япония" />
        <meta property="og:title" content="Услуги по оформлению виз в США, Шенген, Великобритания, Япония" />
        <meta property="og:description" content="Визы в США, Шенген, Великобритания, Япония, профессиональные консультации и помощь с документами." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
      </Helmet>

      <section id="services" className="section_services">
        <div className="content_services">
          <h1 className="h1-benefits">
            наши <b className="b">услуги</b>
          </h1>
          <div className="wrap">
            <div className="cards">
              {visaModalData.map((item, index) => (
                <div className="card" key={index}>
                  <div className={`img img_${index + 1}`}>
                    <div className="img_name">
                      <p className="name_cards">{item.title.split(' ')[0]}</p>
                      <p className="name_b">{item.title.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                  <div className="text_services">
                    <button className="details-btn" onClick={() => openModal(index)}>
                      ПОДРОБНЕЕ
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
<div className="modal-content" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>

            {visaModalData[modalIndex].visas ? (
              visaModalData[modalIndex].visas.map((visa, idx) => (
                <div key={idx}>
                  <h3 className="name">{visa.name}</h3>
                  <p className="des">{visa.description}</p>
                  <p className="step">{visa.step}</p>
                  <ul className="modal-details">
                    {visa.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <>
                <p>{visaModalData[modalIndex].description}</p>
                <ul className="modal-details">
                  {visaModalData[modalIndex].steps?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {visaModalData[modalIndex].faq && (
              <div className="faq-container modal-faq">
                <h3 className="faq-title-visa">Часто задаваемые вопросы</h3>
                {(showAllFaq
                  ? visaModalData[modalIndex].faq
                  : visaModalData[modalIndex].faq.slice(0, 1)
                ).map((item, index) => {
                  const isActive = activeFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className={`faq-item ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveFaqIndex(isActive ? null : index)}
                    >
                      <div className="faq-question">
                        <span className="faq-text">{item.question}</span>
                        <span className="faq-arrow">
                          {isActive ? (
                            <svg width="37" height="16" viewBox="0 0 37 16" fill="none">
                              <path d="M1.63965 15L18.6396 1L35.6396 15" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          ) : (
                            <svg width="37" height="16" viewBox="0 0 37 16" fill="none">
                              <path d="M1.63965 1L18.6396 15L35.6396 1" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          )}
                        </span>
                      </div>
                      {isActive && (
                        <div className="faq-answer">
                          <p className="faq-text2">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}

                {visaModalData[modalIndex].faq.length > 1 && (
                  <button
                    className="show-more-faq"
                    onClick={() => {
                      setShowAllFaq(!showAllFaq);
                      setActiveFaqIndex(null);
                    }}
                  >
                    {showAllFaq ? 'Скрыть вопросы' : 'Показать все вопросы'}
                  </button>
                )}
              </div>
            )}

            <div className="cta-block">
              <p className="cta-text">
                Если вы хотите, мы можем начать оформление прямо сейчас — просто напишите нам в WhatsApp.
              </p>
              <a
                href="https://wa.me13476128437"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
