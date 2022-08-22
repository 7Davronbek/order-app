import { faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
      <div className="square1"></div>
      <div className="square2"></div>
      <div className="square3"></div>
      <div className="social d-flex justify-content-end">
        <ul className='d-flex align-items-center'>
          <li><a href="https://t.me/forevercards" className='soc'><FontAwesomeIcon icon={faTelegramPlane} /></a></li>
          <li><a href="https://www.instagram.com/4ever.cards/" className='soc'><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://t.me/Sakhobiddinovv" className='tex'>Заказать открытку</a></li>
        </ul>
      </div>
      <div className="info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="img ">
                <img className='w-100' src="img/headertext.png" alt="" />
              </div>
              <h5>Креативные открытки, <br />
                которые ваши близкие сохранят навсегда!</h5>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header