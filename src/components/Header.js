import React from 'react';
import logo from '../images/logo/png/techservice-logo-1.png';
import { useNavigate } from "react-router-dom";


function Header(props) {

    const navigate = useNavigate();

    function handleLogin() {
        navigate("/signin");
    }

    function handleRegister() {
        navigate("/signup");
    }
    
    function scrollHandler() {
        navigate("/");
        window.scrollTo(0, 0);
    }

    return (
    <header className="header">
        <ul className={`header__auth ${props.hidden && "hidden"}`}>
            <li className="header__link" onClick = {handleRegister}>Регистрация</li>
            <li className="header__link" onClick = {handleLogin}>Войти</li>
        </ul>
        <div className="header__logo-contacts">
            <img src={logo} className="header__logo" alt="Техсервис" onClick={scrollHandler}/>
            <div className={`header__contacts ${props.hidden && "hidden"}`}>
            <a href="tel: +7(4722)25-00-25" className="header__phone hyperlink hyperlink_color_white">+7(4722)25-00-25</a>
            <a href="mailto: info@techservice31.ru" className="header__mail hyperlink hyperlink_color_white">info@techservice31.ru</a>
            </div>
        </div>

        <nav className={`header__nav ${props.hidden && "hidden"}`}>
            <ul className="header__menu">
                <li>
                    <a href="#news" className="header__link">Новости</a>
                </li>
                <li>
                    <a href="#about" className="header__link">Наши преимущества</a>
                </li>
                <li>
                    <a href="#sequence" className="header__link">Газификация</a>
                </li>
                <li>
                    <a href="#addition" className="header__link">Дополнительные услуги</a>
                </li>
                <li>
                    <a href="#contacts" className="header__link">Контакты</a>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;