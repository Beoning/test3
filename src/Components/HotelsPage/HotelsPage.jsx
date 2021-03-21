import React from "react";
import style from "./HotelsPage.module.css";
import DateIn from "./DateIn/DateIn";
import Hotels from "./Hotels/Hotels";
import Favorite from "./Favorite/Favorite";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vector3 from "../../img/Vector3.png";
import { logout } from "../../redux/reducers/auth-reducer";
import { useDispatch } from "react-redux";

const HotelsPage = () => {
  const dispatch = useDispatch();
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
