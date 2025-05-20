import './contacts.css';
import './contacts-adaptive.css';
import instagram from '../../assets/instagram.png';
import call from '../../assets/call_white.png';
import { useForm, ValidationError } from '@formspree/react';

const Contacts = () => {
  const [state, handleSubmit] = useForm('xpwzgzny');

  return (
    <footer>
      <section className='contacts'>
<div className='contacts-info'>
  <h5>Контакты</h5>
  <div className='contacts-icons'>
    <a href="https://www.instagram.com/alba___usa/" target="_blank" rel="noopener noreferrer">
<img
  className="contact-icon"
  src={instagram}
  alt="Instagram"
  width={64}

/>

    </a>
    <a href="https://wa.me/13476128437" target="_blank" rel="noopener noreferrer">
      <img className="contact-icon" src={call} alt="WhatsApp"   width={64}
  />
    </a>
  </div>
</div>



        {state.succeeded ? (
          <p>Спасибо за ваше сообщение!</p>
        ) : (
          <form method="POST" onSubmit={handleSubmit} className='contact-form'>
            <h3>Остались вопросы?</h3>
            <div className='name-email'>
              <input id="name" type="text" name="name" required placeholder='Ваше имя' />
              <ValidationError prefix="Name" field="name" className="fieldErrors" errors={state.errors} />

              <input id="email" type="email" name="email" required placeholder='E-mail' />
              <ValidationError prefix="Email" field="email" className="fieldErrors" errors={state.errors} />
            </div>

            <textarea id="message" name="message" required placeholder='Введите ваше сообщение' className='textarea'></textarea>
            <ValidationError prefix="Message" field="message" className="fieldErrors" errors={state.errors} />

            <div>
              <button type="submit" disabled={state.submitting} className='submit-btn'>
                Отправить сообщение
              </button>
              <ValidationError className="formErrors" errors={state.errors} />
            </div>
          </form>
        )}
      </section>
    </footer>
  );
};

export default Contacts;
