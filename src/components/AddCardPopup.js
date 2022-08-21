import React, { useEffect, useState } from 'react';

function AddCardPopup(props) {

    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [linkInputError, setLinkInputError] = useState('');
    const [isLinkValid, setIsLinkValid] = useState(false);
    const [message, setMessage] = useState('');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isLinkValid && message) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
      }, [isLinkValid, message])

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            resetForm();
            props.onClose();
        }
    }

    function handleDateChange(e) {
        const input = e.target;
        setDate(input.value);
    }

    function handleLinkChange(e) {
        const input = e.target;
        setLink(input.value);
        const regex = /^https?:\/\/.*\.(?:jpe?g|gif|png)$/gi;
        if (!regex.test(input.value)) {
            setIsLinkValid(false);
            setLinkInputError('Некорректная ссылка');
        } else {
          setIsLinkValid(input.validity.valid);
          setLinkInputError(input.validationMessage);
        }
    }

    function handleMessageChange(e) {
        const input = e.target;
        setMessage(input.value);
    }

    function resetForm() {
        setLink('');
        setIsLinkValid(false);
        setLinkInputError('');
        setDate('');
        setMessage('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!isActive) {
            return
        }
        props.onAddCard({message, link, date});
        resetForm();
        props.onClose();
    }

    function handleClose() {
        resetForm();
        props.onClose();
    }

    return (
        <div className={`popup ${props.isOpen && "popup_opened"}`} onClick={handleOverlay}>
            <div className="popup__content  popup__form">
                <form className="popup__form-container" onSubmit={handleSubmit} noValidate>
                    <label className="popup__label">Ссылка на фото:
                        <input 
                            name="link" 
                            type="text" 
                            value={link} 
                            onChange={handleLinkChange} 
                            className="popup__input" 
                            required
                        />
                        <span className="popup__input-error">{linkInputError}</span>
                    </label>
                    <label className="popup__label">Дата:
                        <input 
                            name="date" 
                            type="date" 
                            value={date} 
                            onChange={handleDateChange}
                            className="popup__input" 
                            required
                        />
                    </label>
                    <label className="popup__label">Текст:
                        <textarea
                            name="message" 
                            type="text" 
                            value={message} 
                            onChange={handleMessageChange}
                            className="popup__textarea" 
                        />
                    </label>
                    <button type="submit" className={`popup__submit ${!isActive && "popup__submit_disabled"}`}>Отправить</button>
                </form>
                <button type="button" className="popup__close" onClick={handleClose} />
            </div>
        </div>
    );
}

export default AddCardPopup;