import React from "react";
import style from "./Card.module.css";
import star from "../../../../img/star.png";
import heart from "../../../../img/heart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteHotel,
  removeFavoriteHotel,
  selectDate,
  selectFavorite,
} from "../../../../redux/reducers/hotels-reducer";

const Card = (props) => {
  const dispatch = useDispatch();
  const favoriteHotel = useSelector(selectFavorite);
  const date = useSelector(selectDate);
  const id = props.id;
  const toggle = () => {
    if (
      favoriteHotel.includes(
        favoriteHotel.filter((item) => item.hotelId === id)[0]
      )
    ) {
      dispatch(removeFavoriteHotel(id));
    } else {
      dispatch(addFavoriteHotel(id));
    }
  };
  return (
    <div className={style.card}>
      <div className={style.name}>
        <p>{props.fullname}</p>
        <button onClick={toggle}>
          <img src={heart} alt="" />
        </button>
      </div>
      <div className={style.date}>
        <p>{date}</p>- <span>{} день</span>
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
          <span>{props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
