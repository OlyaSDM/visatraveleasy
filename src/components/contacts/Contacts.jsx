import './contacts.css';
import './contacts-adaptive.css';
import insta from '../../assets/insta.png';
import telega from '../../assets/telega.png';
import { useForm, ValidationError } from '@formspree/react';

const Contacts = () => {
  const [state, handleSubmit] = useForm('xvoezwel');

  return (
    <footer>
      <section>
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
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" name="name" required />
          <ValidationError prefix="Name" field="name" className="fieldErrors" errors={state.errors} />

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" className="fieldErrors" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <ValidationError prefix="Message" field="message" className="fieldErrors" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          <ValidationError className="formErrors" errors={state.errors} />
        </form>
      )}    
      </section>
    </footer>
  )
}

export default Contacts;
