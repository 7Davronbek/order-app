import React from 'react'

export default function Contact() {
  return (
    <section id='contacts' className='Contact'>
      <div className="container">

        <div className="row">

          <h2>ЛОКАЦИЯ</h2>

          <div className='contact-body'>
            <form className='col-4 contact-form' action="">
              <h3>Оставьте заявку</h3>
              <h4>Мы свяжемся с вами!</h4>
              <input className='col-12' type="text" name="name" id="name" placeholder='Ваше имя' />
              <input className='col-12' type="number" placeholder='Номер телефон' />

              <button>Заказать звонок</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
