import React, { useEffect, useState } from 'react';
import api from '../utils/Api';

function PopupWithForm(props) {

    const [phone, setPhone] = useState('');
    const [phoneInputError, setPhoneInputError] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [name, setName] = useState('');
    const [nameInputError, setNameInputError] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [message, setMessage] = useState('');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isNameValid && isPhoneValid) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
      }, [isNameValid, isPhoneValid])

    const handleOverlay = (e) => {
        if (e.target === e.currentTarget) {
            resetForm();
            props.onClose();
        }
    }

    function handlePhoneChange(e) {
        const input = e.target;
        setPhone(input.value);
        // eslint-disable-next-line
        const regex = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        if (!regex.test(input.value)) {
          setIsPhoneValid(false);
          setPhoneInputError('Некорректный номер телефона');
        } else { 
          setPhoneInputError('');
          setIsPhoneValid(true);
        }
    }

    function handleNameChange(e) {
        const input = e.target;
        setName(input.value);
        const regex = /[^a-zа-яё -]/iu;
        if (regex.test(input.value)) {
            setIsNameValid(false);
            setNameInputError('Допускается только латиница, кириллица, пробел или дефис');
        } else {
          setIsNameValid(input.validity.valid);
          setNameInputError(input.validationMessage);
        }
    }

    function handleMessageChange(e) {
        const input = e.target;
        setMessage(input.value);
    }

    function resetForm() {
        setName('');
        setIsNameValid(false);
        setNameInputError('');
        setPhone('');
        setIsPhoneValid(false);
        setPhoneInputError('');
        setMessage('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!isActive) {
            return
        }
        api.sendData({name, phone, message})
        .then(res => console.log(res))
        .catch(error => 
            console.log('ОШИБКА:', error))
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
                    <label className="popup__label">Как Вас зовут?
                        <input 
                            name="name" 
                            type="text" 
                            value={name} 
                            onChange={handleNameChange} 
                            className="popup__input" 
                            required
                        />
                        <span className="popup__input-error">{nameInputError}</span>
                    </label>
                    <label className="popup__label">Телефон для связи
                        <input 
                            name="phone" 
                            type="tel" 
                            value={phone} 
                            onChange={handlePhoneChange}
                            className="popup__input" 
                        />
                        <span className="popup__input-error">{phoneInputError}</span>
                    </label>
                    <label className="popup__label">Комментарий (необязательно)
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

export default PopupWithForm;