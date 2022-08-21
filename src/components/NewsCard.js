import React from 'react';

function NewsCard(props) {

    function handleClick() {
        const text = props.text;
        const link = props.link;
        const date = props.date;
        props.onClick(text, link, date);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.item);
    }

    return (
        <article className="news-card">
            <img src={props.link} alt="Новость" className="news-card__image"  onClick={handleClick}/>
            <p className="news-card__date">{props.date}</p>
            <p className="news-card__text" onClick={handleClick}>{props.text}</p>
            <button 
                type="button" 
                className={`news-card__trash ${!props.isAdmin ? 'news-card__trash_hidden' : ''}`}
                onClick={handleDeleteClick} 
            />
        </article>
    );
  }
  
export default NewsCard;