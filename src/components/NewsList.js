import React from 'react';
import NewsCard from './NewsCard';

function NewsList(props) {
    return (
        <section className="newslist">
            {
                props.news.slice(0, props.countNews).map(card => {
                    return (
                        <NewsCard 
                            {...card}
                            item={card}
                            date={card.createdAt.slice(0,10)}
                            key={card._id}
                            onClick={props.handleClick}
                            isAdmin={props.isAdmin}
                            onCardDelete={props.handleDeleteClick}
                        />
                    )
                })
            }
        </section>
    )
}

export default NewsList;