import Axios from "axios";

const instance = Axios.create({
  baseURL: `http://engine.hotellook.com/api/v2/`,
});

export const hotelsApi = {
  hotels: "",
  getHotels() {
    return instance
      .get(`lookup.json?query=moscow&lang=ru&lookFor=both&limit=10`)
      .then((response) => {
        return (this.hotels = response.data);
      });
  },
};

console.log(hotelsApi.hotels);
