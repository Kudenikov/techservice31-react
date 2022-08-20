import home from '../images/Home.svg';
import testTube from '../images/Test-tube.svg';
import tool from '../images/Tool.svg';
import gasCheck from '../images/Cogs.svg';
import boiler from '../images/boiler.png';
import waterAnalisysImage from '../images/water-analisys.png';
import gasCheckImage from '../images/gas-check.jpg';
import serviceImage from '../images/service.jpg';
import AdditionCard from './AdditionCard';
import Popup from './Popup';
import React from 'react';
import { gasLevel, selectGasEquipment, service, waterAnalisys } from '../utils/constants';

function Addition () {

    const [isOpen, setIsOpen] = React.useState(false);
    const [popupText, setPopupText] = React.useState('');
    const [popupImage, setPopupImage] = React.useState({});

    function clickHandler(text, image) {
        setIsOpen(true);
        setPopupText(text);
        setPopupImage(image);
    }

    function popupClose() {
        setIsOpen(false);
    }

    React.useEffect(() => {
        const closeByEscape = (e) => {
          if (e.key === 'Escape') {
            popupClose();
          }
        }
  
        document.addEventListener('keydown', closeByEscape)
        
        return () => document.removeEventListener('keydown', closeByEscape)
    }, [])

    return (
        <section className="addition" id="addition">
            <h2 className="addition__title">Дополнительные услуги, предоставляемые нашей компанией</h2>
            <div className="addition__card-container">
                <AdditionCard 
                    imageLink={home}
                    cardText="Подбор, монтаж и&nbsp;предпусковая подготовка газопотребляющего оборудования."
                    onClick={clickHandler}
                    text={selectGasEquipment}
                    image={boiler}
                />
                <AdditionCard 
                    imageLink={testTube}
                    cardText="Химический анализ воды и&nbsp;подбор системы водоподготовки."
                    onClick={clickHandler}
                    text={waterAnalisys}
                    image={waterAnalisysImage}
                />
                <AdditionCard 
                    imageLink={tool}
                    cardText="Ежегодное обслуживание газопотребляющего оборудования."
                    onClick={clickHandler}
                    text={service}
                    image={serviceImage}
                />
                <AdditionCard 
                    imageLink={gasCheck}
                    cardText="Подбор, монтаж, пусконаладочные работы устройств, отслеживающих уровень загазованности помещений."
                    onClick={clickHandler}
                    text={gasLevel}
                    image={gasCheckImage}
                />
                <Popup 
                    isOpen={isOpen}
                    onClose={popupClose}
                    text={popupText}
                    image={popupImage}
                    news={false}
                />                                
            </div>
      </section>
    )
}

export default Addition;