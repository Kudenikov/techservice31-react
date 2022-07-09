import React from 'react';
function AdditionCard(props) {

    function clickHandler() {
        const text = props.text;
        const image = props.image;
        props.onClick(text, image);
    }

    return (
        <div className="addition__card">
            <img src={props.imageLink} className="addition__card-image" alt="Icon" />
            <h3 className="addition__card-text">{props.cardText}</h3>
            <button className="addition__button" onClick={clickHandler}>Подробнее &rarr;</button>
        </div> 
    )
}

export default AdditionCard;