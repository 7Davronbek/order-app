import React from 'react'
import img1 from '../Images/why-we1.png'
import img2 from '../Images/why-we2.png'
import img3 from '../Images/why-we3.png'
import img4 from '../Images/why-we4.png'

export default function WhyWe() {
  return (
    <section id='benefits' className='WhyWe'>
      <div className="container">
        <h2>Почему именно мы?</h2>

        <div className='why-card row'>
          <p className='whycard-number col-2'>01</p>
          <div className='why-card-body col-10'>
            <img src={img1} alt="patalog" />
            <div className='stick'></div>
            <div className='why-card-texts'>
              <h3>Профессионализм</h3>
              <p>Мастера с 5-летним опытом работы, а так же опытом работы за рубежом.</p>
            </div>
          </div>
        </div>

        <div className='why-card-2 row'>
          <div className='why-card-body-2 col-10'>
            <img src={img2} alt="patalog" />
            <div className='stick'></div>
            <div className='why-card-texts'>
              <h3>Гарантия качества 25 лет</h3>
              <p>Мы уверены в качестве своих потолков и можем гарантировать их высокое качество.</p>
            </div>
          </div>
          <p className='whycard-number-2 col-2'>02</p>
        </div>

        <div className='why-card row'>
          <p className='whycard-number col-2'>03</p>
          <div className='why-card-body col-10'>
            <img src={img3} alt="patalog" />
            <div className='stick'></div>
            <div className='why-card-texts'>
              <h3>Выгодно</h3>
              <p>Собственное производство и работа напрямую, без посредников.</p>
            </div>
          </div>
        </div>

        <div className='why-card-2 row'>
          <div className='why-card-body-2 col-10'>
            <img src={img4} alt="patalog" />
            <div className='stick'></div>
            <div className='why-card-texts'>
              <h3>Доступная цена</h3>
              <p>Наш сервис отличается высоким качеством и доступной ценой</p>
            </div>
          </div>
          <p className='whycard-number-2 col-2'>04</p>
        </div>

        

      </div>
    </section>
  )
}
