import React from "react";

function InfoToolTip(props) {
    return (
        <div className={`popup ${props.isOpen && "popup_opened"}`}>
            <div className="popup__tool-tip">
                <button type="button" className="popup__close" onClick={props.onClose} />
                <img className="popup__info-tool-image" src={props.image} alt="Иконка"/>
                <h2 className="popup__tool-tip-title popup__tool-tip-title_centered">{props.title}</h2>
            </div>
        </div>
    );
}

export default InfoToolTip;