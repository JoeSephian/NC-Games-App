import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-m3wy.onrender.com/api/",
});

function getSingleReview(review_id) {
  return ncGamesApi
    .get(`reviews/${review_id}`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => err);
}

export default getSingleReview;
