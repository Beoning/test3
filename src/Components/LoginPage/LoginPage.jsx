import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/reducers/auth-reducer";
import style from "./LoginPage.module.css";

const LoginPage = () => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => dispatch(auth(data));
  return (
    <div className={style.wrapper}>
      <div className={style.login}>
        <h1>Simple Hotel Check</h1>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className={style.label}>
            Логин
            <br />
            <input
              name="email"
              type="text"
              className={style.input}
              ref={register({
                required: "Обязательное поле ввода",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Неправильный email адрес",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label htmlFor="password" className={style.label}>
            Пароль
            <br />
            <input
              name="password"
              type="password"
              className={style.input}
              ref={register({
                required: "Обязательное поле ввода",
                minLength: {
                  value: 8,
                  message: "Минимальная длина пароля 8 символов",
                },
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: "Не используйте кириллицу",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
          <button className={style.btn}>Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
