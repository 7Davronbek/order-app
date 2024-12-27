import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'

export default function ProductsCard() {
  return (
    <section className='ProductsCard'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card kard card1">
              <div className="card-content">
                <h2 className="card-title">Спальный гарнитур</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Шкаф</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Кровати</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Трюмо и камоды</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Прихожая</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Писменные столы</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Журнальный столик</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Столы стулья</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Диваны местного <br /> производства</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card kard card2">
              <div className="card-content">
                <h2 className="card-title">Диваны импортные премиум <br /> класса</h2>
                <p className="card-body">
                </p>
                <Link className='button' to='/products'>Посмотреть </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
