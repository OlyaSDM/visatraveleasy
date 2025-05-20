import './work.css';
import './work-adaptive.css';
import visa from '..//..//assets/visa.png';
import { Helmet } from 'react-helmet-async'



const Work = () => {
    return (
<div>
    <Helmet>
                <title>Как мы работаем | Этапы оформления визы в США</title>
                <meta 
                    name="description" 
                    content="Пошаговое сопровождение при оформлении визы в США: консультация, сбор документов, подача, подготовка к собеседованию и получение визы." 
                />
                <meta 
                    name="keywords" 
                    content="виза США, этапы подачи на визу, помощь с визой, как получить визу, оформление визы, консультация, документы на визу" 
                />
                <meta property="og:title" content="Как мы работаем | Этапы оформления визы" />
                <meta 
                    property="og:description" 
                    content="Узнайте, как мы сопровождаем клиентов на всех этапах получения визы в США — от консультации до получения паспорта с визой." 
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="ru_RU" />
            </Helmet>

    <section className="section_work">
    <div className="content_work">
    <h1 className='h1-benefits top_work'>как мы <b className='b_work'>работаем</b></h1>
<div className="content_row">
<img
  className="visa"
  src={visa}
  alt="visa"
  width={589} 
  height={330} 
/>
<div className="steps_work">
    <div className="first_steps">
    <div className="first_step">
        <p className="number">01</p>
        <div className="text_step">
        <p className="name_step">Консультация</p>
        <p className="description">Мы обсудим все детали и поможем выбрать подходящий тип визы.</p>
        </div>
    </div>
    <div className="first_step">
        <p className="number">02</p>
        <div className="text_step">
        <p className="name_step">Сбор документов</p>
        <p className="description">Заполним анкеты и отправим их в консульство.</p>
        </div>
    </div>
    </div>
    <div className="third_steps third">
    <div className="first_step ">
        <p className="number">03</p>
        <div className="text_step">
        <p className="name_step">Подача заявки</p>
        <p className="description">Мы обсудим все детали и поможем выбрать подходящий тип визы.</p>
        </div>
    </div>
    </div>
    <div className="first_steps">
    <div className="first_step">
        <p className="number">04</p>
        <div className="text_step">
        <p className="name_step">Подготовка к собеседованию</p>
        <p className="description">Расскажем, как правильно себя вести и ответить на вопросы.</p>
        </div>
    </div>
    <div className="first_step">
        <p className="number">05</p>
        <div className="text_step">
        <p className="name_step">Получение визы</p>
        <p className="description">Вам останется только получить паспорт с визой и готовиться к поездке!</p>
        </div>
    </div>
    </div>
</div>
</div>
    </div>
    </section>
</div>
    )
}

export default Work;
