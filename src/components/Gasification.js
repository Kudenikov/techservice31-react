import React from 'react';
function Gasification (props) {

    return (
        <section className="gasification">
            <h1 className="gasification__title">Газификация домов под ключ</h1>
            <p className="gasification__text">Оказываем полный спектр услуг по подключению газа к Вашему дому</p>
            <button onClick={props.buttonHandler} type="button" className="gasification__button">Заказать услугу</button>
      </section>
    )
}

export default Gasification;