import React from 'react';
import NewsList from './NewsList';
import More from './More';
import Popup from './Popup';
import AddCardPopup from './AddCardPopup';
import mainApi from '../utils/MainApi';

import { SCREEN_WIDTH } from '../utils/constants';

function News(props) {

    const [isOpen, setIsOpen] = React.useState(false);
    const [popupText, setPopupText] = React.useState('');
    const [popupImage, setPopupImage] = React.useState({});
    const [isButtonMoreVisible, setIsButtonMoreVisible] = React.useState(false);
    const [countNews, setCountNews] = React.useState(0);
    const [cards, setCards] = React.useState([]);
    const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);


    function setOrder() {
        if (window.innerWidth >= SCREEN_WIDTH.max) {
            setCountNews(12);
        } else if (window.innerWidth >= SCREEN_WIDTH.min && window.innerWidth < SCREEN_WIDTH.max) {
            setCountNews(8);
        } else setCountNews(3);
    }

    React.useEffect(() => {
        mainApi.getInitialCards()
        .then((cards) => {
            setCards(cards.data);
        })
        .catch(error => 
            console.log('ОШИБКА:', error))
        setOrder();
        setIsButtonMoreVisible(true);
        const onResize = () => {
            setTimeout(() => {
                setOrder()
            }, 2000)
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    },[])

    React.useEffect(() => {
        if (countNews < cards.length) {
            setIsButtonMoreVisible(true);
        } else {
            setIsButtonMoreVisible(false);
        }
    }, [countNews, cards])
    
    function popupOpen(text, image) {
        setIsOpen(true);
        setPopupText(text);
        setPopupImage(image);
    }

    function popupClose() {
        setIsOpen(false);
    }

    function onButtonMoreClick() {
        if (window.innerWidth >= SCREEN_WIDTH.max) {
            setCountNews(countNews + 3);
        } else {
            setCountNews(countNews + 2);
        }
    }

    function onAddCard() {
        setIsAddCardPopupOpen(true);
    }

    function handleClose() {
        setIsAddCardPopupOpen(false);
    }

    function handleAddCard({message, link, date}) {
        mainApi.addNewCard({message, link, date})
        .then((card) => {
            setCards([card.data, ...cards]);
        })
        .catch(error => 
            console.log('ОШИБКА:', error))
    }

    function handleDeleteClick(card) {
        mainApi.deleteCard(card._id)
        .then(() => {
            setCards((state) => state.filter((item) => 
            item._id !== card._id
            ))
        })
        .catch(error => 
            console.log('ОШИБКА:', error))
    }

    return (
        <section className="news" id="news">
            <h2 className="news__title">Новости компании</h2>
            <button type="button" className={`news__add-button ${!props.isAdmin && "hidden"}`} onClick = {onAddCard}>Добавить</button>
            <NewsList 
                handleClick = {popupOpen}
                news={cards}
                countNews={countNews}
                isAdmin={props.isAdmin}
                handleDeleteClick={handleDeleteClick}
            />
            <More 
                isButtonMoreVisible = {isButtonMoreVisible}
                onButtonMoreClick = {onButtonMoreClick}
            />
            <Popup 
                isOpen={isOpen}
                onClose={popupClose}
                text={popupText}
                image={popupImage}
                news={true}
            />
            <AddCardPopup 
                isOpen={isAddCardPopupOpen}
                onClose={handleClose}
                onAddCard={handleAddCard}
            />
        </section>
    )
}

export default News;