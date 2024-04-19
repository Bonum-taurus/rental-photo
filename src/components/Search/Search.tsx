import './Search.scss';

export const Search = () => {
  return (
    <section className="search">
      <h3 className="search__title">
        Вы <span>ищете</span> что-то конкретное?
      </h3>

      <p className="search__text">
        Проект <b>Fotoprokat24</b> является агрегатором предложений всех фотопрокатов Москвы и служит для   Вашего удобства. Выберете необходимую категорию, либо начните поиск по названию. Оформив заказ,   Вы сможете забрать его из Пункта Выдачи, либо заказать доставку в любую точку Москвы.
      </p>

      <div className="search__buttons">
        <button className="search__button">
          Перейти в Каталог
        </button>

        <button className="search__button search__button--search">
          Приступить к поиску
        </button>
      </div>
    </section>
  )
}