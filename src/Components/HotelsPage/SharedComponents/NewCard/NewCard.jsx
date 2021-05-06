import React from "react";
import style from "./NewCard.module.css";
import Card from "../Card/Card";
import house from "../../../../img/house.png";

const NewCard = (props) => {
  return (
    <div className={style.newCard}>
      <div className={style.back}>
        <img src={house} alt="" />
      </div>
      <Card className={style.card} fullname={props.fullname} id={props.id} />
    </div>
  );
};

export default NewCard;
