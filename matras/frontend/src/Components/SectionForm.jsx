import React from 'react'

export default function SectionForm() {
  return (
    <section className='SectionForm'>
      <div className="container">
        <form action="">
          <h2>Не знаете, какую модель выбрать?</h2>
          <h3>Оставьте заявку, проконсультируем вас в течение 20 минут</h3>
          <div className='form-inputs'>
            <input placeholder='Ваше имя' type="text" />
            <input placeholder='Номер телефона' type="text" />
            <button>Отправить</button>
          </div>

        </form>
      </div>
    </section>
  )
}
