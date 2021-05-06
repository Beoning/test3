import React, { useEffect } from "react";
import style from "./HotelsPage.module.css";
import DateIn from "./DateIn/DateIn";
import Hotels from "./Hotels/Hotels";
import Favorite from "./Favorite/Favorite";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/Vector3.png";
import { logout } from "../../redux/reducers/auth-reducer";
import { useDispatch } from "react-redux";
import { searchHotels } from "../../redux/reducers/hotels-reducer";

const HotelsPage = () => {
  const dispatch = useDispatch();
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getUTCDate();
  let fulldate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  const newDate = `${year}-${month < 10 ? "0" + month : month}-${
    day + 1 < 10 ? "0" + (day + 1) : day + 1
  }`;
  useEffect(() => {
    dispatch(
      searchHotels({ location: "Moscow", date: fulldate, newDate: newDate })
    );
  });
  return (
    <div className={style.hotelsPage}>
      <nav className={style.nav}>
        <h1>Simple Hotel Check</h1>
        <button className={style.btn} onClick={() => dispatch(logout())}>
          Выйти
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Vector3} alt="" />
        </button>
      </nav>
      <section className={style.section}>
        <div className={style.dateFav}>
          <DateIn />
          <Favorite />
        </div>
        <div className={style.hotels}>
          <Hotels />
        </div>
      </section>
    </div>
  );
};

export default HotelsPage;
