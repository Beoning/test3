import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchHotels } from "../../../redux/reducers/hotels-reducer";
import style from "./DateIn.module.css";

const DateIn = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getUTCDate();
  let fulldate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  const [location, setLocation] = useState("Moscow");
  const [date, setdate] = useState(fulldate);
  const [days, setDays] = useState(1);
  const dispatch = useDispatch();
  const newDate = `${year}-${month < 10 ? "0" + month : month}-${
    day + days < 10 ? "0" + (day + days) : day + days
  }`;

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
          onClick={() => dispatch(searchHotels({ location, date, newDate }))}
        >
          Найти
        </button>
      </form>
    </div>
  );
};

export default DateIn;
