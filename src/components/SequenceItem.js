import React from "react";

function SequenceItem(props) {

    const [isOpen, setIsOpen] = React.useState(false)
    function handleClick() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="sequence__container-horizontal-item">
            <div className="sequence__container-pic">
                <div className="sequence__container-round">{props.number}</div>
                <div className={`sequence__container-line ${!props.display ? "sequence__container-line_display_none" : ""}`}></div>
            </div>
            <div className="sequence__container-text">
                <span className="sequence__container-title" onClick={handleClick}>
                <button className={`sequence__button ${isOpen ? "sequence__button_opened" : ""}`}/>
                    {props.title}
                </span>
                <div className={`sequence__block ${isOpen ? "sequence__block_visible" : ""}`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default SequenceItem;