import './reviews.css';
import './reviews-adaptive.css';

const Reviews = () => {
    return (
        <section className='reviews'>
          <h2>Отзывы наших <span>клиентов</span></h2>
          <section className='wrap'>
            
            <div className='card-rectangle'>
              <div className='card-top'>
                <h5>Александр</h5>
                <p>
                  Я хочу поделиться своим опытом подачи на визу в США, и особенно отметить помощь, которую я получил. Этот процесс может быть довольно стрессовым, но благодаря профессионализму и экспертным знаниям команды, все прошло гладко.
                </p>
              </div>
            </div>

            <div className='card-rectangle'>
              <div className='card-top'>
                <h5>Александр</h5>
                <p>
                  Я хочу поделиться своим опытом подачи на визу в США, и особенно отметить помощь, которую я получил. Этот процесс может быть довольно стрессовым, но благодаря профессионализму и экспертным знаниям команды, все прошло гладко.
                </p>
              </div>
            </div>
            
            <div className='card-rectangle'>
              <div className='card-top'>
                <h5>Александр</h5>
                <p>
                  Я хочу поделиться своим опытом подачи на визу в США, и особенно отметить помощь, которую я получил. Этот процесс может быть довольно стрессовым, но благодаря профессионализму и экспертным знаниям команды, все прошло гладко.
                </p>
              </div>
            </div>

          </section>
          <button className='review-btn'>ВСЕ ОТЗЫВЫ</button>
        </section>
    )
}

export default Reviews;
