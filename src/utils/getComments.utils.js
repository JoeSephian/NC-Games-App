import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-m3wy.onrender.com/api/",
});

function getComments(review_id) {
  return ncGamesApi
    .get(`reviews/${review_id}/comments`)
    .then((result) => {
      return result.data.comments;
    })
    .catch((err) => err);
}

export default getComments;
