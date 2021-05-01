import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getUTCDate();
let fulldate = `${year}-${month < 10 ? "0" + month : month}-${day}`;

const searchHotels = createAsyncThunk();

const initialState = {
  location: "Москва",
  date: fulldate,
  days: "1",
  name: "Moscow Marriott Grand Hotel",
  hotels: [],
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    newHotel: {
      reducer: (state, action) => {
        state.location = action.payload.location;
        state.date = action.payload.date;
        state.days = action.payload.days;
      },
      prepare: (obj) => {
        return {
          payload: { location: obj.location, date: obj.date, days: obj.days },
        };
      },
    },
  },
});

export const { newHotel } = hotelsSlice.actions;

export const selectLocation = (state) => state.hotels.location;
export const selectDate = (state) => state.hotels.date;
export const selectDays = (state) => state.hotels.days;

export default hotelsSlice.reducer;
