import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  newHotel,
  selectDate,
  selectDays,
  selectLocation,
} from "../../../redux/reducers/hotels-reducer";
import style from "./DateIn.module.css";

const DateIn = () => {
  const [location, setLocation] = useState(useSelector(selectLocation));
  const [date, setdate] = useState(useSelector(selectDate));
  const [days, setDays] = useState(useSelector(selectDays));
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.date}>
      <form className={style.form} onSubmit={submit}>
        <label className={style.label}>
          Локация <br />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={style.input}
          />
        </label>
        <label className={style.label}>
          Дата заселения <br />
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setdate(e.target.value);
            }}
            className={style.input}
          />
        </label>
        <label className={style.label}>
          Количество дней <br />
          <input
            type="text"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className={style.input}
          />
        </label>
        <button
          className={style.btn}
          onClick={() => dispatch(newHotel({ location, date, days }))}
        >
          Найти
        </button>
      </form>
    </div>
  );
};

export default DateIn;
