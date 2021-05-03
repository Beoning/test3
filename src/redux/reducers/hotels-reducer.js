import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hotelsApi } from "../../api/api";

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getUTCDate();
let fulldate = `${year}-${month < 10 ? "0" + month : month}-${
  day < 10 ? "0" + day : day
}`;

export const searchHotels = createAsyncThunk("hotels/fetchHotels", async () => {
  const response = await hotelsApi.getHotels();
  console.log(response);
  return response.results.hotels;
});

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
  extraReducers: {
    [searchHotels.fulfilled]: (state, action) => {
      state.hotels = action.payload;
    },
  },
});

export const { newHotel } = hotelsSlice.actions;

export const selectLocation = (state) => state.hotels.location;
export const selectDate = (state) => state.hotels.date;
export const selectDays = (state) => state.hotels.days;
export const selectHotels = (state) => state.hotels.hotels;

export default hotelsSlice.reducer;
