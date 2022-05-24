import React from 'react';
function Footer () {
    return (
        <footer className="footer" id="contacts">
            <h2 className="footer__title">Наши контакты:</h2>
            <div className="footer__contacts-container">
                <p className="footer__text">Телефон: <a href="tel: +7(4722)25-00-25" className="hyperlink hyperlink_color_white">+7(4722)25&#8209;00&#8209;25</a></p>
                <p className="footer__text">E-mail: <a href="mailto: info@techservice31.ru" className="hyperlink hyperlink_color_white hyperlink_underline">info@techservice31.ru</a></p>
                <p className="footer__text">Наш сайт для юридических лиц:</p>
                <p className="footer__text"><a href="http://www.techservice31.ru" className="hyperlink hyperlink_color_white hyperlink_underline" target="_blank" rel="noopener noreferrer">techservice31.ru</a></p>
                <br />
                <p className="footer__text">ООО &laquo;Техсервис&raquo;</p>
                <p className="footer__text">г. Белгород, пр-т Богдана Хмельницкого, 133к</p>
                <p className="footer__text">Режим работы: Пн&nbsp;&mdash; Пт&nbsp;8-00&nbsp;&mdash; 17-00</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.6794867127946!2d36.572960051453684!3d50.61449297939776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41266ae11e61e397%3A0x1a4bf3a56b91fbfe!2z0JHQvtCz0LTQsNC90LAg0KXQvNC10LvRjNC90LjRhtC60L7Qs9C-INC_0YDQvtGB0L8uLCAxMzPQmiwg0JHQtdC70LPQvtGA0L7QtCwg0JHQtdC70LPQvtGA0L7QtNGB0LrQsNGPINC-0LHQuy4sIDMwODAwMg!5e0!3m2!1sru!2sru!4v1642839144264!5m2!1sru!2sru" 
            className="footer__map" title="map"/>
      </footer>  
    )
}

export default Footer;