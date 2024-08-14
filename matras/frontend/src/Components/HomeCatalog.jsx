import React from 'react'
import img1 from '../Images/catalog1.png'

export default function HomeCatalog() {
  return (
    <section className='HomeCatalog'>
      <div className="container">
        <h2>Наши матрасы</h2>
        <div className="row">
          
          <div className="col-md-3">
            <div className="card">
              <img src={img1} alt="card-img" />
              <div className="card-body">
                <h3>Matras topper</h3>
                <button>Заказать</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={img1} alt="card-img" />
              <div className="card-body">
                <h3>Matras topper</h3>
                <button>Заказать</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={img1} alt="card-img" />
              <div className="card-body">
                <h3>Matras topper</h3>
                <button>Заказать</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={img1} alt="card-img" />
              <div className="card-body">
                <h3>Matras topper</h3>
                <button>Заказать</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
