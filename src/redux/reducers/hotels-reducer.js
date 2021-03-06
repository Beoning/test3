import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { hotelsApi } from "../../api/api";
import pictureOne from "../../img/pictureOne.png";
import pictureTwo from "../../img/pictureTwo.png";
import pictureThree from "../../img/pictureThree.png";

export const searchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async ({ location, date, newDate }) => {
    const response = await hotelsApi.getHotels({ location, date, newDate });
    return response;
  }
);

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getUTCDate();
let fulldate = `${year}-${month < 10 ? "0" + month : month}-${
  day < 10 ? "0" + day : day
}`;

const initialState = {
  images: [pictureOne, pictureThree, pictureTwo, pictureThree],
  error: "",
  location: "",
  date: fulldate,
  days: 1,
  hotels: [],
  favorite: [],
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setdays: (state, action) => {
      state.days = action.payload;
    },
    addFavoriteHotel: (state, action) => {
      if (
        state.favorite.includes(
          state.favorite.filter((item) => item.hotelId === action.payload)[0]
        )
      ) {
        return state;
      } else {
        state.favorite.push(
          state.hotels.filter((hotel) => hotel.hotelId === action.payload)[0]
        );
      }
    },
    removeFavoriteHotel: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.hotelId !== action.payload
      );
    },
    sortPriceUp: (state) => {
      state.favorite.sort((a, b) => {
        if (a.priceAvg > b.priceAvg) {
          return 1;
        }
        if (a.priceAvg < b.priceAvg) {
          return -1;
        }
        return 0;
      });
    },
    sortPriceDown: (state) => {
      state.favorite
        .sort((a, b) => {
          if (a.priceAvg > b.priceAvg) {
            return 1;
          }
          if (a.priceAvg < b.priceAvg) {
            return -1;
          }
          return 0;
        })
        .reverse();
    },
    sortStarsUp: (state) => {
      state.favorite.sort((a, b) => {
        if (a.stars > b.stars) {
          return 1;
        }
        if (a.stars < b.stars) {
          return -1;
        }
        return 0;
      });
    },
    sortStarsDown: (state) => {
      state.favorite
        .sort((a, b) => {
          if (a.stars > b.stars) {
            return 1;
          }
          if (a.stars < b.stars) {
            return -1;
          }
          return 0;
        })
        .reverse();
    },
  },
  extraReducers: {
    [searchHotels.fulfilled]: (state, action) => {
      state.hotels = action.payload;
      state.location = action.payload[0].location.name;
    },
    [searchHotels.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export const {
  newHotel,
  addFavoriteHotel,
  setdays,
  removeFavoriteHotel,
  sortPriceUp,
  sortPriceDown,
  sortStarsUp,
  sortStarsDown,
} = hotelsSlice.actions;

export const selectHotels = (state) => state.hotels.hotels;
export const selectFavorite = (state) => state.hotels.favorite;
export const selectLocation = (state) => state.hotels.location;
export const selectDate = (state) => state.hotels.date;
export const selcetDays = (state) => state.hotels.days;
export const selectPictures = (state) => state.hotels.images;

export default hotelsSlice.reducer;
