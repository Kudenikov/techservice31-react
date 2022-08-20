import React from 'react';
import NewsList from './NewsList';
import More from './More';
import Popup from './Popup';
import news from '../utils/news';

import { SCREEN_WIDTH } from '../utils/constants';

function News() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [popupText, setPopupText] = React.useState('');
    const [popupImage, setPopupImage] = React.useState({});
    const [isButtonMoreVisible, setIsButtonMoreVisible] = React.useState(false);
    const [countNews, setCountNews] = React.useState(0);

    function setOrder() {
        if (window.innerWidth >= SCREEN_WIDTH.max) {
            setCountNews(12);
        } else if (window.innerWidth >= SCREEN_WIDTH.min && window.innerWidth < SCREEN_WIDTH.max) {
            setCountNews(8);
        } else setCountNews(3);
    }

    React.useEffect(() => {
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
        if (countNews < news.length) {
            setIsButtonMoreVisible(true);
        } else {
            setIsButtonMoreVisible(false);
        }
    }, [countNews, news])
    
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

    return (
        <section className="news" id="news">
            <h2 className="news__title">Новости компании</h2>
            <NewsList 
                handleClick = {popupOpen}
                news={news}
                countNews={countNews}
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
        </section>
    )
}

export default News;