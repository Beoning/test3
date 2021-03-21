import React from "react";
import Card from "../SharedComponents/Card/Card";
import style from "./Favorite.module.css";

const Favorite = () => {
  return (
    <div className={style.fav}>
      <h2>Избранное</h2>
      <div className={style.btnWrapper}>
        <button className={style.btn}>Ретинг</button>
        <button className={style.btn}>Цена</button>
      </div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Favorite;
