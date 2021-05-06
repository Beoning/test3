import Axios from "axios";

const instance = Axios.create({
  baseURL: `https://engine.hotellook.com/api/v2/`,
});

export const hotelsApi = {
  getHotels(arg) {
    return instance
      .get(
        `cache.json?location=${arg.location}&currency=rub&checkIn=${arg.date}&checkOut=${arg.newDate}&limit=10`
      )
      .then((response) => {
        return response.data;
      });
  },
};
