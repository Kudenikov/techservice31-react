import Header from "./Header";
import Footer from "./Footer";
import Gasification from "./Gasification";
import News from "./News";
import About from "./About";
import Sequence from "./Sequence";
import Addition from "./Addition";
import PopupWithForm from "./PopupWithForm";
import React from 'react';

function Main(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const buttonHandler = () => {
        setIsOpen(true);
    }

    function popupClose() {
        setIsOpen(false);
    }

    return (
        <>
            <Header 
                hidden={false} 
                email={props.email}
                loggedIn={props.loggedIn}
                handleExit={props.handleExit}
            />
            <Gasification buttonHandler={buttonHandler} />
            <News 
                isAdmin={props.isAdmin}
            />
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