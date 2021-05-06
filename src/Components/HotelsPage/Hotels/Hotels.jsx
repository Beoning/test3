import React from "react";
import style from "./Hotels.module.css";
import check from "../../../img/check.png";
import pictureOne from "../../../img/pictureOne.png";
import pictureTwo from "../../../img/pictureTwo.png";
import pictureThree from "../../../img/pictureThree.png";
import NewCard from "../SharedComponents/NewCard/NewCard";
import { useSelector } from "react-redux";
import {
  selectDate,
  selectFavorite,
  selectHotels,
  selectLocation,
} from "../../../redux/reducers/hotels-reducer";

const Hotels = () => {
  const favoriteHotelsCount = useSelector(selectFavorite).length;
  const location = useSelector(selectLocation);
  const currentDate = useSelector(selectDate);
  const hotels = useSelector(selectHotels).map((hotel) => (
    <NewCard fullname={hotel.label} key={hotel.id} id={hotel.id} />
  ));
  return (
    <div className={style.hotels}>
      <div className={style.header}>
        <div className={style.location}>
          <h1>Отели</h1>
          <img src={check} alt="" />
          <span>{location}</span>
        </div>
        <span className={style.date}>{currentDate}</span>
      </div>
      <div className={style.pictures}>
        <img src={pictureOne} alt="" />
        <img src={pictureTwo} alt="" />
        <img src={pictureThree} alt="" />
        <img src={pictureThree} alt="" />
      </div>
      <div className={style.favorite}>
        <p>
          Добавлено в Избранное:
          <span className={style.count}>
            {favoriteHotelsCount === 1
              ? favoriteHotelsCount + " отель"
              : favoriteHotelsCount < 5
              ? favoriteHotelsCount + " отеля"
              : favoriteHotelsCount + " отелей"}
          </span>
        </p>
      </div>
      <div className={style.list}>{hotels}</div>
    </div>
  );
};

export default Hotels;
