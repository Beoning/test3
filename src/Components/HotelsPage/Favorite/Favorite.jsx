import React, { useState } from "react";
import Card from "../SharedComponents/Card/Card";
import style from "./Favorite.module.css";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../../redux/reducers/hotels-reducer";

const Favorite = () => {
  const favorite = useSelector(selectFavorite);
  const [leftTop, setLeftTop] = useState(true);
  const [leftBot, setLeftBot] = useState(false);
  const [rightTop, setRightTop] = useState(false);
  const [rightBot, setRightBot] = useState(false);
  const togglePriceUp = () => {
    setLeftBot(false);
    setLeftTop(false);
    setRightBot(true);
    setRightTop(false);
  };
  const togglePriceDown = () => {
    setLeftBot(false);
    setLeftTop(false);
    setRightBot(false);
    setRightTop(true);
  };
  const toggleRankUp = () => {
    setLeftBot(true);
    setLeftTop(false);
    setRightBot(false);
    setRightTop(false);
  };
  const toggleRankDown = () => {
    setLeftBot(false);
    setLeftTop(true);
    setRightBot(false);
    setRightTop(false);
  };
  const favoriteHotels = favorite.map((hotel) => (
    <Card
      key={hotel.hotelId}
      fullname={hotel.hotelName}
      id={hotel.hotelId}
      price={hotel.priceAvg}
    />
  ));
  return (
    <div className={style.fav}>
      <h2>Избранное</h2>
      <div className={style.btnWrapper}>
        <button
          className={leftTop || leftBot ? style.btnGreen : style.btnWhite}
        >
          Ретинг
          <div className={style.select}>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleRankDown}
              className={leftTop ? style.green : style.white}
            >
              <path
                d="M8.49988 4.24264L7.43922 5.3033L4.25724 2.12132L1.07526 5.3033L0.014596 4.24264L4.25724 0L8.49988 4.24264Z"
                fill="#e5e5e5"
              />
            </svg>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleRankUp}
              className={leftBot ? style.green : style.white}
            >
              <path
                d="M8.49988 1.83245L7.43922 0.77179L4.25724 3.95377L1.07526 0.77179L0.014596 1.83245L4.25724 6.07509L8.49988 1.83245Z"
                fill="#e5e5e5"
              />
            </svg>
          </div>
        </button>
        <button
          className={rightTop || rightBot ? style.btnGreen : style.btnWhite}
        >
          Цена
          <div className={style.select}>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={togglePriceDown}
              className={rightTop ? style.green : style.white}
            >
              <path
                d="M8.49988 4.24264L7.43922 5.3033L4.25724 2.12132L1.07526 5.3033L0.014596 4.24264L4.25724 0L8.49988 4.24264Z"
                fill="#e5e5e5"
              />
            </svg>
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={togglePriceUp}
              className={rightBot ? style.green : style.white}
            >
              <path
                d="M8.49988 1.83245L7.43922 0.77179L4.25724 3.95377L1.07526 0.77179L0.014596 1.83245L4.25724 6.07509L8.49988 1.83245Z"
                fill="#e5e5e5"
              />
            </svg>
          </div>
        </button>
      </div>
      <div>{favoriteHotels}</div>
    </div>
  );
};

export default Favorite;
