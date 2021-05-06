import React from "react";
import style from "./Card.module.css";
import star from "../../../../img/star.png";
import heart from "../../../../img/heart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteHotel,
  removeFavoriteHotel,
  selectFavorite,
} from "../../../../redux/reducers/hotels-reducer";

const Card = (props) => {
  const dispatch = useDispatch();
  const favoriteHotel = useSelector(selectFavorite);
  const date = useSelector((state) => state.hotels.date);
  const days = useSelector((state) => state.hotels.days);
  const name = useSelector((state) => state.hotels.name);
  const id = props.id;
  const toggle = () => {
    if (
      favoriteHotel.includes(favoriteHotel.filter((item) => item.id === id)[0])
    ) {
      dispatch(removeFavoriteHotel(id));
    } else {
      dispatch(addFavoriteHotel(id));
    }
  };
  return (
    <div className={style.card}>
      <div className={style.name}>
        <p>{props.fullname || name}</p>
        <button onClick={toggle}>
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
