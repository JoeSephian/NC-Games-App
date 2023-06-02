import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-m3wy.onrender.com/api/",
});

function getCategories() {
  return ncGamesApi
    .get("categories")
    .then((result) => {
      return result.data;
    })
    .catch((err) => err);
}

export default getCategories;
