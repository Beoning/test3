import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectPictures } from "../../../../redux/reducers/hotels-reducer";
import style from "./Slider.module.css";

const Slider = () => {
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0
  const images = useSelector(selectPictures);
  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };
  return (
    images.length > 0 && (
      <>
        <button className={style.btn} onClick={slideLeft}>
          {"<"}
        </button>
        <img src={images[index]} alt={index} />
        <img src={images[(index + 1) % images.length]} alt={index} />
        <img src={images[(index + 2) % images.length]} alt={index} />
        <img src={images[(index + 3) % images.length]} alt={index} />
        <button className={style.btn} onClick={slideRight}>
          {">"}
        </button>
      </>
    )
  );
};

export default Slider;
