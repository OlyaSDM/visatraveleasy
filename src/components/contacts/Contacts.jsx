import './contacts.css';
import './contacts-adaptive.css';
import insta from '../../assets/insta.png';
import telega from '../../assets/telega.png';

const Contacts = () => {
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

          <div className='contact-form'>
            <h5>Остались вопросы?</h5>
          </div>
        </section>
      </footer>
    )
}

export default Contacts;
