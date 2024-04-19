import React from 'react';
import './GoodCard.scss';

type Props = {
  photo: string,
}

export const GoodCard: React.FC<Props> = ({ photo }) => {
  return (
    <div className="card">
      <div className="card__good-photo">
        <img src={photo} alt="good" />
      </div>

      <h3 className="card__name">
        PowerShot SX620 HS
      </h3>
      <span className="card__brand">
        Canon
      </span>

      <div className="card__prices">
        <div className="card__price">
          <span className="card__price-number">630 Р</span>
          <span>Будний</span> 
        </div>

        <div className="card__price">
          <span className="card__price-number">750 Р</span>
          <span>Выходной</span> 
        </div>

        <div className="card__price">
          <span className="card__price-number">4 380 Р</span>
          <span>Неделя</span>
        </div>

        <div className="card__price">
          <span className="card__price-number">12 250 Р</span>
          <span>Месяц</span>
        </div>
      </div>

      <div className="card__buttons">
        <button className="card__button">
          Подробнее
        </button>

        <button className="card__button card__button--card">
          В корзину
        </button>
      </div>
    </div>
  )
}