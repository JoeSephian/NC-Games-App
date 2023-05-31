import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-m3wy.onrender.com/api/",
});

function getSingleReview(givenReviewId) {
  return ncGamesApi
    .get(`reviews/${givenReviewId}`)
    .then((result) => {
      return result.data;
    })
    .catch((err) => err);
}

export default getSingleReview;
