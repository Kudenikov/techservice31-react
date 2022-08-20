import React from 'react';
function Popup(props) {

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    }

    return (
        <div className={`popup ${props.isOpen && "popup_opened"}`} onClick={handleOverlay}>
            <div className={`popup__content ${props.news && "popup__content_reverse"}`}>
                <button type="button" className="popup__close" onClick={props.onClose} />
                <div className="popup__text">{props.text}</div>
                <img src={props.image} className={`popup__image ${props.news && "popup__image_news"}`} alt="Картинка" />
            </div>
        </div>
    );
}

export default Popup;