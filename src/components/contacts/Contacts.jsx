import './contacts.css';
import './contacts-adaptive.css';
import instagram from '../../assets/instagram.png';
import call from '../../assets/call_white.png';
import { useForm, ValidationError } from '@formspree/react';


const Contacts = () => {
const [state, handleSubmit] = useForm('xpwzgzny');
return (
<footer id='contacts' className="footer">
   <div className="footer-overlay" />
   <section className="contacts-container">
      <div className="contacts-left">
         <h5>Контакты</h5>
         <p className="footer-description">Свяжитесь с нами удобным для вас способом:</p>
         <div className="contacts-icons">
            <a href="https://www.instagram.com/visa_travel_easy?igsh=MXFoanAxMDk5MWk5ZA==" target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" src={instagram} alt="Instagram" />
            </a>
            <a href="https://wa.me/13476128437" target="_blank" rel="noopener noreferrer">
            <img className="contact-icon" src={call} alt="WhatsApp" />
            </a>
         </div>
      </div>
      <div className="contacts-right">
         {state.succeeded ? (
         <p className="success-message">Спасибо за ваше сообщение!</p>
         ) : (
         <form method="POST" onSubmit={handleSubmit} className="contact-form">
            <h3>Остались вопросы?</h3>
            <div className="name-email">
               <input id="name" type="text" name="name" required placeholder="Ваше имя" />
               <input id="email" type="email" name="email" required placeholder="E-mail" />
            </div>
            <textarea id="message" name="message" required placeholder="Введите ваше сообщение" className="textarea"></textarea>
            <button type="submit" disabled={state.submitting} className="submit-btn">
            Отправить сообщение
            </button>
            <ValidationError className="formErrors" errors={state.errors} />
         </form>
         )}
      </div>
   </section>
</footer>
);
};
export default Contacts;