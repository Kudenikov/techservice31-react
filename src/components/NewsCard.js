import React from 'react';

function NewsCard(props) {

    function handleClick() {
        const text = props.text;
        const image = props.image;
        props.onClick(text, image);
    }

    return (
        <article className="news-card" onClick={handleClick}>
            <img src={props.image} alt={props.title} className="news-card__image" />
            <p className="news-card__date">25.07.2022</p>
            <p className="news-card__text">{props.text}</p>
        </article>
    );
  }
  
export default NewsCard;