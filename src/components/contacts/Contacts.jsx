import './contacts.css';
import './contacts-adaptive.css';
import insta from '../../assets/insta.png';
import telega from '../../assets/telega.png';
import { useForm, ValidationError } from '@formspree/react';

const Contacts = () => {
  const [state, handleSubmit] = useForm('xpwzgzny');

  return (
    <footer>
      <section className='contacts'>
        <div className='contacts-info'>
          <h5>Контакты</h5>
          <div className='contact'>
            <img src={insta} alt="logo"/>
            <p><span>Email:</span> info@[вашдомен].com</p>
          </div>

          <div className='contact'>
            <img src={telega} alt="logo"/>
            <p><span>Телефон:</span> +1 (347) 6128437</p>
          </div>
        </div>

        {state.succeeded ? (<p>Thanks for your submission!</p>) : (
  
        <form method="POST" onSubmit={handleSubmit} className='contact-form'>
          <h3>Остались вопросы?</h3>
          <div className='name-email'>
            <input id="name" type="text" name="name" required placeholder='Ваше имя'/>
            <ValidationError prefix="Name" field="name" className="fieldErrors" errors={state.errors} />

            <input id="email" type="email" name="email" required placeholder='E-mail'/>
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
  )
}

export default Contacts;
