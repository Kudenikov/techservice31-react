import logo from '../images/logo_black_white_text.svg'

function Header() {
    
    function scrollHandler() {
        window.scrollTo(0, 0);
    }

    return (
    <header className="header">
      <div className="header__logo-contacts">
        <img src={logo} className="header__logo" alt="Техсервис" onClick={scrollHandler}/>
        <div className="header__contacts">
          <a href="tel: +7(4722)25-00-25" className="header__phone hyperlink hyperlink_color_white">	
            &#9742; +7(4722)25-00-25</a>
          <a href="mailto: info@techservice31.ru" className="header__mail hyperlink hyperlink_color_white">&#9993; info@techservice31.ru</a>
        </div>
      </div>

        <nav className="header__nav">
            <ul className="header__menu">
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