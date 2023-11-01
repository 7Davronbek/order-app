import React from 'react'
import img1 from '../Images/price1.png'
import img2 from '../Images/price2.png'

export default function Price() {
  return (
    <section className='Price'>
      <div className="container">
        <div className="row">
          <h3 className='price-tittle'>ЦЕНЫ</h3>

          <div className="price-blog row">
            <img className='col-md-6
            ' src={img1} alt="" />
            <div className='price-info col-md-6'>
              <h3>Однотонные потолки</h3>
              <h4>От 90.000 до 150.000 тыс</h4>
              <p>Главной особенностью натяжного потолка, его идеально ровная поверхность. Конечно, такое возможно только тогда, когда монтаж производится квалифицированными специалистами.</p>
              <button>Заказать</button>
            </div>
          </div>

          <div className="price-blog row">
            <div className='price-info col-md-6'>
              <h3>Потолки с фотопечатью</h3>
              <h4>От 150.000 до 200.000 тыс</h4>
              <p>Натяжные потолки с фотопечатью вне всяких сомнений станут украшением любого пространства и будут приковывать взгляд приходящих в гости людей</p>
              <button>Заказать</button>
            </div>
            <img className='col-md-6' src={img2} alt="" />
          </div>

          
        </div>
      </div>
    </section>
  )
}
