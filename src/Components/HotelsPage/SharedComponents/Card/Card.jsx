import React from "react";
import style from "./Card.module.css";
import star from "../../../../img/star.png";
import badStar from "../../../../img/badStar.png";
import heart from "../../../../img/heart.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteHotel,
  removeFavoriteHotel,
  selcetDays,
  selectDate,
  selectFavorite,
} from "../../../../redux/reducers/hotels-reducer";

const Card = (props) => {
  const dispatch = useDispatch();
  const favoriteHotel = useSelector(selectFavorite);
  const date = useSelector(selectDate);
  const days = useSelector(selcetDays);
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
        <p>{date}</p>-{" "}
        <span>
          {days === 1
            ? days + " день"
            : days < 5
            ? days + " дня"
            : days + " дней"}
        </span>
      </div>
      <div className={style.score}>
        {props.stars === 5 ? (
          <div className={style.stars}>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        ) : props.stars === 4 ? (
          <div className={style.stars}>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={badStar} alt="" />
          </div>
        ) : props.stars === 3 ? (
          <div className={style.stars}>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
          </div>
        ) : props.stars === 2 ? (
          <div className={style.stars}>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
          </div>
        ) : props.stars === 1 ? (
          <div className={style.stars}>
            <img src={star} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
          </div>
        ) : (
          <div className={style.stars}>
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
            <img src={badStar} alt="" />
          </div>
        )}
        <div className={style.price}>
          <p>Price:</p>
          <span>{props.price} руб.</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
