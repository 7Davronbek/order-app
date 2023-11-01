import React from 'react'
import img1 from '../Images/portfolio1.png'
import img2 from '../Images/portfolio2.png'

export default function Portfolio() {
  return (
    <section className='Portfolio'>
      <div className="container">
        <h2 className='portfolio-tittle'>НАШИ РАБОТЫ</h2>
        <div className="porfolio-blog">
          <div className='portfolio-blog__card'>
            <img src={img1} alt="НАТЯЖНЫЕ ПОТОЛКИ" />
            <h2>Однотонные потолки</h2>
            <p>Посмотреть весь каталог <div className='stick'></div></p>
          </div>

          <div className='portfolio-blog__card'>
            <img src={img2} alt="НАТЯЖНЫЕ ПОТОЛКИ" />
            <h2>Однотонные потолки</h2>
            <p>Посмотреть весь каталог <div className='stick'></div></p>
          </div>
        </div>

        <div className="porfolio-blog">
          <div className='portfolio-blog__card'>
            <img src={img1} alt="НАТЯЖНЫЕ ПОТОЛКИ" />
            <h2>Однотонные потолки</h2>
            <p>Посмотреть весь каталог <div className='stick'></div></p>
          </div>

          <div className='portfolio-blog__card'>
            <img src={img2} alt="НАТЯЖНЫЕ ПОТОЛКИ" />
            <h2>Однотонные потолки</h2>
            <p>Посмотреть весь каталог <div className='stick'></div></p>
          </div>
        </div>
      </div>
    </section>
  )
}
