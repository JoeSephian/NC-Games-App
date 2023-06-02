import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-m3wy.onrender.com/api/",
});

function getReviews(category) {
  const url = category ? `reviews?${category}` : "reviews";
  return ncGamesApi
    .get(url)
    .then((result) => {
      return result.data;
    })
    .catch((err) => err);
}

export default getReviews;
