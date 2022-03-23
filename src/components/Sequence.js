import SequenceItem from "./SequenceItem";

function Sequence () {

  return (
        <section className="sequence" id="sequence">
        <h2 className="sequence__title">Последовательность действий газификации частного дома.</h2>
        <div className="sequence__container">
          <SequenceItem number="1" title="Оставьте заявку" display={true}>
            <ul className="list">
              <li className="sequence__container-description">Позвоните нам по&nbsp;телефону: <a href="tel: +7(4722)25-00-25" className="hyperlink">+7(4722)25&#8209;00&#8209;25</a></li>
              <li className="sequence__container-description">Отправьте сообщение на&nbsp;почту: <a href="mailto: info@techservice31.ru" className="hyperlink">info@techservice31.ru</a></li>
              <li className="sequence__container-description">Оставьте заявку на&nbsp;сайте: <a href="http://techservice31.ru" target="_blank" rel="noreferrer" className="hyperlink">techservice31.ru</a></li>
            </ul>
          </SequenceItem>
          <SequenceItem number="2" title="Выезд нашего специалиста на&nbsp;объект" display={true}>
            <p className="sequence__container-description">
              Предварительная оценка газификации объекта с&nbsp;возможной 
              консультацией по&nbsp;выбору газопотребляющего оборудования, устройств загазованности, системы водоподготовки.
            </p>
          </SequenceItem>
          <SequenceItem number="3" title="Оформление договора на&nbsp;предоставление услуг" display={true}>
          <p className="sequence__container-description">Необходимые документы:</p>
              <ul className="list list_style_dot">
                <li className="sequence__container-description">копия документа, удостоверяющего личность (паспорт);</li>
                <li className="sequence__container-description">поэтажный план дома с&nbsp;размерами;</li>
                <li className="sequence__container-description">копии паспортов на&nbsp;газовое оборудование (котел, плита газовая, прибор учета и&nbsp;т.д.).</li>
              </ul>
          </SequenceItem>
          <SequenceItem number="4" title="Получение технических условий" display={true}>
            <p className="sequence__container-description">Выполняется специалистами ООО &laquo;Газпром газораспределение&raquo;. Срок выполнения 10&nbsp;рабочих дней.</p>
              <p className="sequence__container-description">Необходимые документы:</p>
              <ul className="list list_style_dot">
                <li className="sequence__container-description">копии правоустанавливающих документов на&nbsp;земельный участок, на&nbsp;котором располагается 
                    или будет располагаться дом&nbsp;&mdash; выписка ЕГРН;</li>
                <li className="sequence__container-description">копия документа, подтверждающего право собственности на&nbsp;дом, 
                    если он&nbsp;уже построен&nbsp;&mdash; выписка ЕГРН;</li>
                <li className="sequence__container-description">ситуационный план (это схема земельного участка и&nbsp;прилегающих площадей, вид сверху);</li>
                <li className="sequence__container-description">расчет планируемого максимального часового расхода газа (не&nbsp;нужно его подавать, 
                    если планируемый максимальный расход газа не&nbsp;превышает 5&nbsp;куб.&nbsp;м.);</li>
                <li className="sequence__container-description">копия паспорта.</li>
              </ul> 
          </SequenceItem>
          <SequenceItem number="5" title="Проект газоснабжения объекта" display={true}>
          <p className="sequence__container-description">Выполняется специалистами ООО &laquo;Техсервис&raquo;. Срок выполнения 1-3 рабочих дня.</p>
              <p className="sequence__container-description">В проекте содержатся:</p>
              <ul className="list list_style_dot">
                <li className="sequence__container-description">сведения из&nbsp;ТУ, ранее выданных собственнику;</li>
                <li className="sequence__container-description">места подводки и&nbsp;подключения газа к&nbsp;дому;</li>
                <li className="sequence__container-description">разводка коммуникаций внутри объекта;</li>
                <li className="sequence__container-description">перечень работ, которые будут проводиться при подключении;</li>
                <li className="sequence__container-description">перечень мер безопасности;</li>
                <li className="sequence__container-description">сметы и&nbsp;расчеты;</li>
                <li className="sequence__container-description">характеристики оборудования, которое будет работать на&nbsp;газу.</li>
              </ul>  
          </SequenceItem>
          <SequenceItem number="6" title="Земельные работы" display={true}>
            <p className="sequence__container-description">Дополнительная услуга. Можем предложить услуги наших субподрядчиков. 
                Параметры траншеи: глубина 0,8-1&nbsp;метр, ширина 300-400&nbsp;мм. Стоимость работ мини экскаватора 250 рублей п/м 
                с&nbsp;засыпкой или работа землекопов 170 рублей в&nbsp;час. Вы&nbsp;можете выполнить данную работу самостоятельно, 
                с&nbsp;привлечением сторонних организаций.
            </p> 
          </SequenceItem>
          <SequenceItem number="7" title="Монтаж газопровода" display={true}>
            <p className="sequence__container-description">Выполняется специалистами ООО &laquo;Техсервис&raquo;.</p> 
            <p className="sequence__container-description">Перечень работ:</p>
            <ul className="list list_style_dot">
              <li className="sequence__container-description">монтаж подводящей газовой трубы;</li>
              <li className="sequence__container-description">монтаж газораспределительного оборудования (ШРП, ГРС, ГРП);</li>
              <li className="sequence__container-description">монтаж газового счетчика;</li>
              <li className="sequence__container-description">проверка качества стыков газопровода, проведение гидравлических испытаний.</li>
            </ul> 
          </SequenceItem>
          <SequenceItem number="8" title="Договор на сервисное обслуживание котла" display={true}>
            <p className="sequence__container-description">Дополнительная услуга. Выполняется специалистами ООО &laquo;Техсервис&raquo; 
               или сторонней организацией по&nbsp;решению заказчика.
            </p> 
          </SequenceItem>
          <SequenceItem number="9" title="Договор о&nbsp;техническом обслуживании и&nbsp;ремонте ВДГО" display={true}>
            <p className="sequence__container-description">
              Выполняется специалистами ООО &laquo;Газпром газораспределение&raquo;.
            </p> 
          </SequenceItem>
          <SequenceItem number="10" title="Договор на&nbsp;поставку газа" display={true}>
            <p className="sequence__container-description">Выполняется специалистами ООО &laquo;Газпром газораспределение&raquo;. 
                Срок выполнения 15&nbsp;рабочих дней.</p>
            <p className="sequence__container-description">Необходимые документы:</p>
            <ul className="list list_style_dot">
              <li className="sequence__container-description">копии правоустанавливающих документов на&nbsp;земельный участок, на&nbsp;котором располагается 
                  или будет располагаться дом&nbsp;&mdash; выписка ЕГРН;</li>
              <li className="sequence__container-description">копия документа, подтверждающего право собственности на&nbsp;дом, 
                  если он&nbsp;уже построен&nbsp;&mdash; выписка ЕГРН;</li>
              <li className="sequence__container-description">ситуационный план (это схема земельного участка и&nbsp;прилегающих площадей, вид сверху);</li>
              <li className="sequence__container-description">расчет планируемого максимального часового расхода газа (не&nbsp;нужно его подавать, 
                  если планируемый максимальный расход газа не&nbsp;превышает 5&nbsp;куб.&nbsp;м.);</li>
              <li className="sequence__container-description">копия паспорта;</li>
              <li className="sequence__container-description">выписка из&nbsp;домовой книги.</li>
            </ul>  
          </SequenceItem>
          <SequenceItem number="11" title="Акт проверки технического состояния дымоходов" display={true}>
            <p className="sequence__container-description">
              Дополнительная услуга. Выполняется специалистами ООО &laquo;Техсервис&raquo; 
              или сторонней организацией по&nbsp;решению заказчика.
            </p> 
          </SequenceItem>
          <SequenceItem number="12" title="Строительная готовность" display={true}>
            <p className="sequence__container-description">Выполняется заказчиком.</p>
            <p className="sequence__container-description">Перечень работ:</p>
            <ul className="list list_style_dot">
              <li className="sequence__container-description">установить все газовые приборы согласно проекту газоснабжения 
                  (дополнительная услуга, может быть осуществлена специалистами ООО &laquo;Техсервис&raquo;);</li>
              <li className="sequence__container-description">вентиляционные каналы должны соответствовать проекта 
                  газоснабжения с&nbsp;установленными на&nbsp;них решетками;</li>
              <li className="sequence__container-description">установить двери и&nbsp;окна в&nbsp;помещениях, где расположены газовые приборы;</li>
              <li className="sequence__container-description">потолки из&nbsp;горючих материалов должны быть подшиты негорючими материалами 
                  над газовыми приборами;</li>
              <li className="sequence__container-description">полы должны быть забетонированы;</li>
              <li className="sequence__container-description">площадь остекления окон должна составлять 
                  не&nbsp;менее 0,8&nbsp;кв.&nbsp;м&nbsp;(стекло без учета рамы);</li>
              <li className="sequence__container-description">надземный и&nbsp;внутренний газопроводы должны быть окрашены.</li>
            </ul> 
          </SequenceItem>
          <SequenceItem number="13" title="Инспекция технического надзора" display={true}>
            <p className="sequence__container-description">
              Выполняется специалистами ООО &laquo;Газпром газораспределение&raquo;.
            </p> 
          </SequenceItem>
          <SequenceItem number="14" title="Техническое присоединение" display={true}>
            <p className="sequence__container-description">Выполняется специалистами ООО &laquo;Газпром газораспределение&raquo;. 
              Срок выполнения 8&nbsp;месяцев с&nbsp;даты подписания договора поставки газа.
            </p> 
          </SequenceItem>
          <SequenceItem number="15" title="Пуск газа" display={false}>
            <p className="sequence__container-description">
              Выполняется специалистами ООО &laquo;Газпром газораспределение&raquo;.
            </p> 
          </SequenceItem>
        </div>
      </section>
    )
}

export default Sequence;