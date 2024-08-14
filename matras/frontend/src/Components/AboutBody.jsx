import React from 'react'
import img from '../Images/about.jpg'
import { PureIncrement, PureDecrement } from 'pure_counter';

export default function AboutBody() {
  return (
    <section className='AboutBody'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt="" />
          </div>
          <div className="col-md-6">
            <h2>О компании</h2>
            <h3>Наша компания радует своих клиентов с 2020 года. За 4 года работы мы обслужили более 10 000 клиентов. Наша продукция доступна на рынке как дешево, так и качественно. Вы не ошибетесь, выбрав нас, ведь мы даем гарантию на свою продукцию от 4 до 7 лет. Мы предлагаем вам желаемый дизайн и варианты на выбор. Наша продукция служит новой до 10 лет. Если вам нужен качественный и экологический матрас, то только «XR Matras». «XR Матрас» — надежное качество</h3>
            <p></p>
            <div className="row">
              <div className="col-md-6">
                <PureIncrement start={0} end={10} duration={2} className="purecounter" /> <span>года</span>
                <p>опыт работы</p>
              </div>
              <div className="col-md-6">
                <PureIncrement start={0} end={5000} duration={10} className="purecounter" /> <span>+</span>
                <p>довольные клиенты</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
