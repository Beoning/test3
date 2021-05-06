import React from "react";
import Card from "../SharedComponents/Card/Card";
import style from "./Favorite.module.css";
import selectTop from "../../../img/select.svg";
import selectBot from "../../../img/selectbot.svg";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../../redux/reducers/hotels-reducer";

const Favorite = () => {
  const favorite = useSelector(selectFavorite);
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
        <button className={style.btn}>
          Ретинг
          <div className={style.select}>
            <img src={selectTop} alt="" className={style.top} />
            <img src={selectBot} alt="" className={style.bot} />
          </div>
        </button>
        <button className={style.btn}>
          Цена
          <div className={style.select}>
            <img src={selectTop} alt="" className={style.top} />
            <img src={selectBot} alt="" className={style.bot} />
          </div>
        </button>
      </div>
      <div>{favoriteHotels}</div>
    </div>
  );
};

export default Favorite;
