import time from '../images/clock_yellow.svg';
import quality from '../images/checked_yellow.svg';
import finance from '../images/finance.svg';

function About () {
    return (
        <section className="about" id="about">
        <h2 className="about__title">Почему необходимо выбирать именно нас?</h2>
        <h3 className="about__subtitle">Наша главная цель&nbsp;&mdash; удовлетворение потребностей заказчика.</h3>
        <ul className="about__list">
            <li className="about__reason">
                <img src={time} alt="Время и сроки" className="about__image" />
                <div className="about__text-container">
                    <h4 className="about__reason-title">Время и сроки.</h4>
                    <ul className="list">
                        <li className="about__text">Консультация специалиста в&nbsp;удобное для Вас время с&nbsp;выездом на&nbsp;объект.</li>
                        <li className="about__text">Сжатые сроки проектирования и&nbsp;выполнения строительно-монтажных работ.</li>
                        <li className="about__text">Консультация специалиста по&nbsp;выбору газопотребляющего оборудования и&nbsp;устройства контроля загазованности.</li>
                    </ul>
                </div>
            </li>
            <li className="about__reason">
                <img src={quality} alt="Качество и гарантии" className="about__image" />
                <div className="about__text-container">
                    <h4 className="about__reason-title">Качество и&nbsp;гарантии.</h4>
                    <ul className="list">
                        <li className="about__text">Выполнение всех видов работ аттестованными специалистами.</li>
                        <li className="about__text">Приобретение материалов и&nbsp;оборудования у&nbsp;заводов изготовителей и&nbsp;официальных дилеров.</li>
                        <li className="about__text">Все работы выполняются в&nbsp;соответствии с&nbsp;нормативными документами.</li>
                        <li className="about__text">Сопровождение проекта на&nbsp;всех этапах газификации.</li>
                    </ul>
                </div>
            </li>
            <li className="about__reason">
                <img src={finance} alt="Финансы и условия оплаты" className="about__image" />
                <div className="about__text-container">
                    <h4 className="about__reason-title">Финансы и&nbsp;условия оплаты.</h4>
                    <ul className="list">
                        <li className="about__text">Индивидуальный подход к&nbsp;каждому проекту.</li>
                        <li className="about__text">Система бонусов и&nbsp;скидок.</li>
                        <li className="about__text">Все работы выполняются в&nbsp;соответствии с&nbsp;нормативными документами.</li>
                        <li className="about__text">Комплексное решение задач по&nbsp;газификации.</li>
                    </ul>
                </div>
            </li>
        </ul>
    </section>
    )
}

export default About;