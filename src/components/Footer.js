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
                <p className="footer__text">г. Белгород, ул. Чичерина, 50 б</p>
                <p className="footer__text">Режим работы: Пн&nbsp;&mdash; Пт&nbsp;8-00&nbsp;&mdash; 17-00</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17384.685717430308!2d36.54162021299122!3d50.625904918027096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41266ad58e00ca29%3A0x110b3c3835159fb3!2z0YPQuy4g0KfQuNGH0LXRgNC40L3QsCwgNTDQsSwg0JHQtdC70LPQvtGA0L7QtCwg0JHQtdC70LPQvtGA0L7QtNGB0LrQsNGPINC-0LHQuy4sIDMwODAyMw!5e0!3m2!1sru!2sru!4v1654141798576!5m2!1sru!2sru" 
            className="footer__map" title="map"/>
      </footer>  
    )
}

export default Footer;