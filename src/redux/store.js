import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth-reducer";
import hotelsReducer from "./reducers/hotels-reducer";

const store = configureStore({
  reducer: { auth: authReducer, hotels: hotelsReducer },
});

export default store;
