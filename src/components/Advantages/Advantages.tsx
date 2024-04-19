import './Advantages.scss';

export const Advantages = () => {
  return (
    <section className="advantages">
      <div className="advantages__item">
        <span className="advantages__icon advantages__icon--choice"></span>
        <span className="advantages__text">
          Самый большой 
          <br />
          выбор техники
        </span>
      </div>

      <div className="advantages__item">
        <span className="advantages__icon advantages__icon--clock"></span>
        <span className="advantages__text">
          Быстрое
          <br /> 
          оформление заказа
        </span>
      </div>

      <div className="advantages__item">
        <span className="advantages__icon advantages__icon--location"></span>
        <span className="advantages__text">
          Можно забрать заказ
          <br />
          в пункте выдачи
        </span>
      </div>

      <div className="advantages__item">
        <span className="advantages__icon advantages__icon--delivery"></span>
        <span className="advantages__text">
          Доставка в любую
          <br />
          точку Москвы
        </span>
      </div>

      <div className="advantages__item">
        <span className="advantages__icon advantages__icon--pay-card"></span>
        <span className="advantages__text">
          Оплата картой
          <br />
          и наличными
        </span>
      </div>
    </section>
  )
}