function AdditionCard(props) {

    function clickHandler() {
        const text = props.text;
        const title = props.title;
        props.onClick(text, title);
    }

    return (
        <div className="addition__card">
            <img src={props.imageLink} className="addition__card-image" alt="Icon" />
            <p className="addition__card-text">{props.cardText}</p>
            <button className="addition__button" onClick={clickHandler}>Подробнее &rarr;</button>
        </div> 
    )
}

export default AdditionCard;