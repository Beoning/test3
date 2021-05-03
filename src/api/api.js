import Axios from "axios";

const instance = Axios.create({
  baseURL: `http://engine.hotellook.com/api/v2/`,
});

export const hotelsApi = {
  getHotels() {
    return instance
      .get(`lookup.json?query=moscow&lang=ru&lookFor=both&limit=10`)
      .then((response) => {
        return response.data;
      });
  },
};
