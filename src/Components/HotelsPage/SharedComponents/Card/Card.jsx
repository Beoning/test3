import React from "react";
import style from "./Card.module.css";
import star from "../../../../img/star.png";
import heart from "../../../../img/heart.png";
import { useSelector } from "react-redux";

const Card = () => {
  const date = useSelector((state) => state.hotels.date);
  const days = useSelector((state) => state.hotels.days);
  const name = useSelector((state) => state.hotels.name);
  return (
    <div className={style.card}>
      <div className={style.name}>
        <p>{name}</p>
        <button>
          <img src={heart} alt="" />
        </button>
      </div>
      <div className={style.date}>
        <p>{date}</p>- <span>{days} день</span>
      </div>
      <div className={style.score}>
        <div className={style.stars}>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div className={style.price}>
          <p>Price:</p>
          <span>23 924 ₽</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
