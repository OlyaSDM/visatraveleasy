import './services.css';
import './services-adaptive.css';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const modalData = [
  {
    title: 'Туристические визы B1/B2',
    content: 'Полное сопровождение при получении туристической визы: помощь с анкетой DS-160, оплатой консульского сбора, запись на собеседование и подготовка к нему.',
  },
  {
    title: 'Студенческие визы F1/F2',
    content: 'Консультации по получению I-20 от учебного заведения, проверка финансовых документов, тренировка перед интервью и полное сопровождение.',
  },
  {
    title: 'Визовые консультации',
    content: 'Обсуждение визовых целей, подбор нужного типа визы, анализ вашей ситуации и составление плана действий.',
  },
  {
    title: 'Помощь в сборе документов',
    content: 'Проверка необходимых документов, рекомендации по оформлению, шаблоны и примеры для предоставления в посольство.',
  }
];

const Services = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div>
      <Helmet>
        <title>Услуги по оформлению виз в США | Туристические, студенческие, консультации</title>
        <meta 
          name="description" 
          content="Мы предлагаем помощь в оформлении виз в США: туристические визы B1/B2, студенческие F1/F2, визовые консультации и сопровождение. Индивидуальный подход к каждому клиенту." 
        />
        <meta 
          name="keywords" 
          content="виза в США, туристическая виза, студенческая виза, визовая консультация, оформление визы, b1 b2, f1 f2, помощь с визой" 
        />
        <meta property="og:title" content="Услуги по оформлению виз в США" />
        <meta 
          property="og:description" 
          content="Туристические и студенческие визы, профессиональные консультации и помощь с документами. Полное сопровождение при подаче на визу." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
      </Helmet>

      <section id="services" className="section_services">
        <div className="content_services">
          <h1 className='h1-benefits'>наши <b className='b'>услуги</b></h1>
          <div className="wrap">
            <div className="cards">
              {modalData.map((item, index) => (
                <div className="card" key={index}>
                  <div className={`img img_${index + 1}`}>
                    <div className='img_name'>
                      <p className='name_card'>{item.title.split(' ')[0]}</p>
                      <p className='name_b'>{item.title.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </div>
                  <div className="text_services">
                    <p className="text_s">{truncateText(item.content, 100)}</p>
                    <button className='details-btn' onClick={() => openModal(index)}>ПОДРОБНЕЕ</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2>{modalData[modalIndex].title}</h2>
            <p>{modalData[modalIndex].content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
