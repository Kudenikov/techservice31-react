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
                            key={card.id}
                            onClick={props.handleClick}
                        />
                    )
                })
            }
        </section>
    )
}

export default NewsList;