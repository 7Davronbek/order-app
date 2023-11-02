import React from 'react'
import img1 from '../Images/reviews1.png'
import img2 from '../Images/reviews2.png'
import img3 from '../Images/reviews3.png'
import img4 from '../Images/reviews4.png'


export default function Reviews() {
  return (
    <section id='feedback' className='Reviews'>
      <div className="container">
        <div className="row">
          <h2>ОТЗЫВЫ</h2>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src={img1} alt="" />
                <h3>Хасан <div className='stick'></div></h3>
                <p>Качество продукта превзошло наши ожидания благодаря превосходному профессиональному мастерству и разумной цене. Удачи в работе</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src={img2} alt="" />
                <h3>Сарвиноз <div className='stick'></div></h3>
                <p>В прошлом году команда Best Potolki сделала отличный дизайн потолка моей комнаты. Качество потолка как новое. Отличная работа.</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src={img3} alt="" />
                <h3>Ольга <div className='stick'></div></h3>
                <p>Захотелось поменять потолок в доме и подруга посоветовала мне воспользоваться услугой «Бест Потолки» и я не ошиблась, выбрав «Бест Потолки».</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <img src={img4} alt="" />
                <h3>Бахтиер <div className='stick'></div></h3>
                <p>Спасибо за отличные потолки. Это было именно то, что я хотел, и членам моей семьи это очень понравилось. Планирую воспользоваться вашими услугами еще раз</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
