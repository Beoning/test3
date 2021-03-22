import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newHotel } from "../../../redux/reducers/hotels-reducer";
import style from "./DateIn.module.css";

const DateIn = () => {
  const [location, setLocation] = useState(
    useSelector((state) => state.hotels.location)
  );
  const [date, setdate] = useState(useSelector((state) => state.hotels.date));
  const [days, setDays] = useState(useSelector((state) => state.hotels.days));
  const dispatch = useDispatch();
  return (
    <div className={style.date}>
      <form
        className={style.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          onClick={() => dispatch(newHotel([location, date, days]))}
        >
          Найти
        </button>
      </form>
    </div>
  );
};

export default DateIn;
