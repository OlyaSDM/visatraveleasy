import './faq.css';
import './faq-adaptive.css';
import { useState, useEffect  } from "react";


const faqData = [
    { question: "Какие документы мне нужны?", answer: "Список документов зависит от типа визы. Мы предоставим вам полный список на консультации."},
    { question: "Что делать, если мне отказали в визе?", answer: "Отказ в визе — это не конец пути! Важно проанализировать причину отказа, устранить возможные ошибки или предоставить дополнительные доказательства ваших связей с родиной. После этого вы можете повторно подать заявление, подготовив более сильный кейс. Если вам нужна помощь в этом процессе, я готова поддержать вас на каждом этапе."},
    { question: "Сколько времени занимает процесс оформления визы?", answer: "Время оформления визы зависит от её типа и сезона. В среднем, процесс занимает от 2 до 6 недель, включая заполнение анкеты, запись на собеседование и ожидание решения. Однако сроки могут варьироваться, поэтому важно начать подготовку заранее. Я помогу вам организовать всё так, чтобы избежать задержек."},
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
        <section className="faq">
            <div className="faq-container">
                <h2 className="faq-title">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
                <h2 className=" faq-title faq-subtitle">FAQ</h2>
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
