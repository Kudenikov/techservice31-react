import home from '../images/Home.png';
import testTube from '../images/Test-tube.png';
import tool from '../images/Tool.png';
import gasCheck from '../images/Cloud-6.png';
import AdditionCard from './AdditionCard';
import Popup from './Popup';
import React from 'react';

function Addition () {

    const [isOpen, setIsOpen] = React.useState(false);
    const [popupText, setPopupText] = React.useState('');
    const [popupTitle, setPopupTitle] = React.useState('');

    function clickHandler(text, title) {
        setIsOpen(true);
        setPopupText(text);
        setPopupTitle(title);
    }

    function popupClose() {
        setIsOpen(false);
    }

    return (
        <section className="addition" id="addition">
            <h2 className="addition__title">Дополнительные услуги, предоставляемые нашей компанией.</h2>
            <div className="addition__card-container">
                <AdditionCard 
                    imageLink={home}
                    cardText="Подбор, монтаж и&nbsp;предпусковая подготовка газопотребляющего оборудования."
                    onClick={clickHandler}
                    text="
                    Дом можно назвать уютным и&nbsp;комфортным, если в&nbsp;нём тепло. Сегодня есть разные способы, как отопить частный дом. Каждый выбирает тот вариант, который наиболее оптимальный в&nbsp;его случае.
                    При обустройстве автономной системы отопления особое внимание нужно уделить выбору газового котла. Выбор газового котла является важным вопросом, от&nbsp;правильности решения которого может зависеть уровень комфортности вашей системы отопления. Но&nbsp;для решения данного вопроса необходимо определить какой котел выбрать.
                    
                    Газовые котлы классифицируются:
1. По конструктивным особенностям- одноконтурный и двухконтурный.
2. По расположению- настенные и напольные.
3. По энергоэффективности- обычные и конденсационные.
4. По конструктивному устройству газовой горелки- с открытой и закрытой камерой.
5. По виду топлива- твердотопливные, газовые, электрические, жидкостные.
Все виды котлов, в каждом отдельном случае имеют свои преимущества и недостатки. Наша компания сможет дать Вам рекомендации по выбору котла для конкретной ситуации.
                    "
                    title="Выбор системы отопления"
                />
                <AdditionCard 
                    imageLink={testTube}
                    cardText="Химический анализ воды и&nbsp;подбор системы водоподготовки."
                    onClick={clickHandler}
                />
                <AdditionCard 
                    imageLink={tool}
                    cardText="Ежегодное обслуживание газопотребляющего оборудования."
                    onClick={clickHandler}
                />
                <AdditionCard 
                    imageLink={gasCheck}
                    cardText="Подбор, монтаж, пусконаладочные работы устройств, отслеживающих уровень загазованности помещений."
                    onClick={clickHandler}
                />
                <Popup 
                    isOpen={isOpen}
                    onClose={popupClose}
                    text={popupText}
                    title={popupTitle}
                />                                
            </div>
      </section>
    )
}

export default Addition;