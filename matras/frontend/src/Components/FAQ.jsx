import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  return (
    <section className='FAQ'>
      <div className="container">
        <h2>ОТВЕЧАЕМ НА ВАШИ ВОПРОСЫ</h2>
        <Accordion className='accardion' defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accardion-icon' />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className='accardion-tittle'>Почему "XR MATRAS"</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accardion-txt'>
            Собственное производство 
            <br />
            <br />
            Мы отвечаем за весь цикл: от производства до покупки матраса, а также за гарантийное обслуживание клиента. 
            Соотношение цены и качества
            <br />
            <br />
            Мы гарантируем лучшее соотношение цены и качества, т.к. сами формируем свою ценовую политику, исключая из цепочки посредников.
            <br />
            <br />
            Безопасность
            Мы тщательно подбираем материалы и наполнители для наших матрасов, а также сотрудничаем только с проверенными поставщиками комплектующих.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accardion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accardion-icon'/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='accardion-tittle'>Как выбрать жесткость?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accardion-txt'>
            Ориентируйтесь на свой вкус и учитывайте вес. Взрослый здоровый человек может спать на матрасе любой жесткости, которая ему нравится. Если вам сложно определиться с выбором — возьмите модель универсальной средней жесткости. Хороший вариант — модели с разной жесткостью сторон. Можно переворачивать матрас и менять жесткость постели в зависимости от вашего настроения
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accardion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accardion-icon'/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='accardion-tittle'>Какая высота матраса лучше?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accardion-txt'>
            Для постоянного спального места необходимо выбирать матрас не ниже 15 см, иначе он не сможет оказать ортопедическую поддержку позвоночнику. Чаще всего покупатели выбирают модели высотой 20-30 см.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accardion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accardion-icon'/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='accardion-tittle'>Что делать, если матрас не подошел?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accardion-txt'>
              Новое изделие, которое не было в употреблении и находится в заводской целлофановой упаковке, можно поменять. Наш совет: при получении матраса не снимайте упаковку сразу. Сначала положите матрас на кровать и убедитесь, что он нужного вам размера. Потом прилягте и проверьте, подходит ли вам выбранный уровень жесткости. Когда вы проверите соответствие матраса вашим ожиданиям и убедитесь, что он вам подходит — после этого снимайте упаковку.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accardion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accardion-icon'/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='accardion-tittle'>Правда ли что чем жестче матрас, тем лучше?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accardion-txt'>
            Нет, это далеко не так. Слишком жесткий матрас не поддерживает равномерно все части тела. Поддерживаются только наиболее тяжелые части, такие как плечи и бедра. Возросшее давление в этих частях препятствует нормальной циркуляции крови, что приводит к частым переворачиваниям и, соответственно, к неполноценному сну.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className='accardion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className='accardion-icon'/>}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className='accardion-tittle'>Основная функция матраса?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='accardion-txt'>
            Основная функция матраца – обеспечение правильного положения тела во время отдыха. В результате значительно улучшается качество сна, иными словами, основная функция матраса – обеспечение комфортного сна. Комфортный же сон позволяет нам полноценно высыпаться за меньшее количество времени.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
      
    </section>
  );
}