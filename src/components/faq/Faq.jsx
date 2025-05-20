import './faq.css';
import './faq-adaptive.css';
import { useState, useEffect  } from "react";
import { Helmet } from 'react-helmet-async'




const faqData = [
    { question: "Какие документы мне нужны?", answer: "Список документов зависит от типа визы. Мы предоставим вам полный список на консультации."},
    { question: "Что делать, если мне отказали в визе?", answer: "Отказ в визе — это не конец пути! Важно проанализировать причину отказа, устранить возможные ошибки или предоставить дополнительные доказательства ваших связей с родиной. После этого вы можете повторно подать заявление, подготовив более сильный кейс. Если вам нужна помощь в этом процессе, я готова поддержать вас на каждом этапе."},
    { question: "Сколько времени занимает процесс оформления визы?", answer: "Время оформления визы зависит от её типа и сезона. В среднем, процесс занимает от 2 до 6 недель, включая заполнение анкеты, запись на собеседование и ожидание решения. Однако сроки могут варьироваться, поэтому важно начать подготовку заранее. Я помогу вам организовать всё так, чтобы избежать задержек."},
    { question: "Нужно ли лично приходить в консульство на собеседование?", answer: "Да, собеседование является обязательной частью процесса получения большинства типов виз. Однако есть исключения: дети до 14 лет и взрослые старше 79 лет, а также некоторые заявители на продление визы могут быть освобождены от собеседования."},
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".faq-item")) {
                setActiveIndex(null);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <section className="faq" id="FAQ">
             <Helmet>
                <title>FAQ | Часто задаваемые вопросы о визах в США</title>
                <meta name="description" content="Ответы на самые частые вопросы о визах в США: документы, сроки, собеседование, отказ и поддержка. Узнайте больше перед подачей!" />
                <meta name="keywords" content="виза в США, визовая поддержка, часто задаваемые вопросы, отказ в визе, собеседование, документы для визы" />
                <meta property="og:title" content="Часто задаваемые вопросы о визах в США" />
                <meta property="og:description" content="Узнайте ответы на популярные вопросы: какие документы нужны, сколько занимает оформление, что делать при отказе и многое другое." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ru_RU" />
            </Helmet>

            <div className="faq-container">
                <h2 className="faq-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                <h2 className=" faq-title faq-subtitle">FAQ</h2>
                                <h3 className=" faq-title-visa">О визах США</h3>

                {faqData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className="faq-question">
                            <span className="faq-text">{item.question}</span>
                            <span className="faq-arrow">
                                {activeIndex === index ? (
                                    <svg 
                                        width="37"
                                        height="16"
                                        viewBox="0 0 37 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.63965 15L18.6396 1L35.6396 15"
                                            stroke="#0F0F0F"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="37"
                                        height="16"
                                        viewBox="0 0 37 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.63965 1L18.6396 15L35.6396 1"
                                            stroke="#0F0F0F"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p className="faq-text2">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}

                                                <h3 className=" faq-title-visa any"> О других визах</h3>

                                {faqData.map((item, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <div className="faq-question">
                            <span className="faq-text">{item.question}</span>
                            <span className="faq-arrow">
                                {activeIndex === index ? (
                                    <svg 
                                        width="37"
                                        height="16"
                                        viewBox="0 0 37 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.63965 15L18.6396 1L35.6396 15"
                                            stroke="#0F0F0F"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="37"
                                        height="16"
                                        viewBox="0 0 37 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.63965 1L18.6396 15L35.6396 1"
                                            stroke="#0F0F0F"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p className="faq-text2">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}


export default Faq;
