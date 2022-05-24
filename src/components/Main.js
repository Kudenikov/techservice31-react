import Gasification from "./Gasification"
import About from "./About";
import Sequence from "./Sequence";
import Addition from "./Addition";
import PopupWithForm from "./PopupWithForm";
import React from 'react';

function Main() {
    const [isOpen, setIsOpen] = React.useState(false);
    const buttonHandler = () => {
        setIsOpen(true);
    }

    function popupClose() {
        setIsOpen(false);
    }

    return (
        <main>
            <Gasification buttonHandler={buttonHandler} />
            <About />
            <Sequence />
            <Addition />
            <PopupWithForm 
                isOpen={isOpen}
                onClose={popupClose}
            />
    </main>
    )
}

export default Main;