import { createSlice } from "@reduxjs/toolkit";

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getUTCDate();
let fulldate = `${year}-${"0" + month}-${day}`;

const initialState = {
  location: "Москва",
  date: fulldate,
  days: "1",
  name: "Moscow Marriott Grand Hotel",
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    newHotel: (state, action) => {
      state.location = action.payload[0];
      state.date = action.payload[1];
      state.days = action.payload[2];
    },
  },
});

export const { newHotel } = hotelsSlice.actions;
export default hotelsSlice.reducer;
