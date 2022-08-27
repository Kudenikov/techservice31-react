import React, { useEffect, useState, useRef } from 'react';
import mainApi from '../utils/MainApi';

function AddCardPopup(props) {

    const [selectedFile, setSelectedFile] = useState(null);
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [link, setLink] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [uploaded, setUploaded] = useState(null);
    const filePicker = useRef(null);

    const hostUrl = 'http://localhost:5000';

    useEffect(() => {
        if (message && date && selectedFile) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
      }, [message, date, selectedFile])
    
    useEffect(() => {
        if (link) {
            props.onAddCard({message, link, date});
            handleClose();
        }
    }, [link])

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

    function handleChange(e) {
        console.log(e.target.files);
        setSelectedFile(e.target.files[0]);
    }

    function handleMessageChange(e) {
        const input = e.target;
        setMessage(input.value);
    }

    function resetForm() {
        setDate('');
        setMessage('');
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!isActive) {
            return
        }
        const formData = new FormData();
        formData.append('file', selectedFile);
        mainApi.uploadCard(formData)
        .then((data) => {
            setUploaded(data);
            setLink(hostUrl + '/static' + data.filePath);
            
        })
        .catch(error => 
            console.log('ОШИБКА:', error))
    }

    function handleClose() {
        resetForm();
        setLink('');
        setSelectedFile(null);
        setUploaded(null);
        props.onClose();
    }

    function handleAddPhoto() {
        if (uploaded) return;
        filePicker.current.click();
    }

    return (
        <div className={`popup ${props.isOpen && "popup_opened"}`} onClick={handleOverlay}>
            <div className="popup__content  popup__form">
                <form className="popup__form-container" encType="multipart/form-data" onSubmit={handleSubmit} noValidate>
                    <button type="button" className={`popup__button ${uploaded && 'popup__button_disabled'}`} onClick={handleAddPhoto}>Добавить фото</button>
                    <input 
                        type="file" 
                        onChange={handleChange} 
                        ref={filePicker}
                        className="popup__input_hidden" 
                        accept="image/*,.png,.jpg,.gif,.wed"
                        required
                    />
                    {selectedFile && (
                        <div className="popup__file-name">Файл {selectedFile.name} добавлен</div>
                    )}
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