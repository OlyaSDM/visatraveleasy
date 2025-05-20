import './about.css';
import './about-adaptive.css';
import photo from '..//..//assets/img_about.webp';
import { Helmet } from 'react-helmet-async'


const About = () => {
return (
    <section id="about" className='about'>
        <Helmet>
        <title>Обо мне — Альбина | Визовая поддержка США</title>
        <meta name="description" content="Я Альбина. Более 5 лет помогаю с оформлением виз в США. Уверенная и профессиональная поддержка." />
        <meta name="keywords" content="визы в США, помощь с визами, Альбина, визовая поддержка" />
        <meta property="og:title" content="Обо мне — Альбина" />
        <meta property="og:description" content="Профессиональная помощь в визовых вопросах. Более 5 лет опыта в США." />
        <meta property="og:image" content="/img_about.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
      </Helmet>
        <div className='about__img'>
<img 
  src={photo} 
  alt="photo" 
    loading="lazy"
    width={600}

  sizes="(max-width: 600px) 40vw, 640px"
/>

        </div>
        <div className='about__desc'>
            <h2 className='about__title'>ОБО МНЕ</h2>
            <p className='about__text'>
            Меня зовут <span>Альбина</span>, и я живу в США, где с уверенностью продолжаю развивать свои профессиональные навыки и знания. До иммиграции я работала в крупной компании, где занималась оформлением виз для сотрудников. Этот опыт стал основой моего профессионализма и знания всех нюансов визовых процессов. Благодаря многолетнему опыту и работе с визами, я прекрасно понимаю, какие сложности могут возникнуть на пути к заветной поездке. <span>Моя цель - сделать процесс оформления визы для вас легким, понятным и успешным.</span>
            </p>
            <p className='about__text'>
            Каждое дело я беру с вниманием и ответственностью, помогая клиентам преодолевать визовые барьеры и достигать их целей.
            </p>
        </div>   
    </section>
    
)
}

export default About;
