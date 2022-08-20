import Header from "./Header";
import Footer from "./Footer";
import Gasification from "./Gasification";
import News from "./News";
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
        <>
            <Header hidden={false} />
            <Gasification buttonHandler={buttonHandler} />
            <News />
            <About />
            <Sequence />
            <Addition />
            <Footer />
            <PopupWithForm 
                isOpen={isOpen}
                onClose={popupClose}
            />
    </>
    )
}

export default Main;