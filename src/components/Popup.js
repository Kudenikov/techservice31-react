function Popup(props) {
    return (
        <div className={`popup ${props.isOpen && "popup_opened"}`}>
            <div className="popup__content">
                <button type="button" className="popup__close" onClick={props.onClose} />
                <h2 className="popup__title">{props.title}</h2>
                <p className="popup__text">{props.text}</p>
            </div>
        </div>
    );
}

export default Popup;