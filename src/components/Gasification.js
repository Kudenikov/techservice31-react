import React from 'react';
function Gasification (props) {

    return (
        <section className="gasification">
            <h1 className="gasification__title">Газификация домов под&nbsp;ключ</h1>
            <h2 className="gasification__text">Оказываем полный спектр услуг по подключению газа к Вашему дому</h2>
            <button onClick={props.buttonHandler} type="button" className="gasification__button">Заказать услугу</button>
      </section>
    )
}

export default Gasification;