import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-m3wy.onrender.com/api/",
});

function upVote(inc_votes, review_id) {
  return ncGamesApi.patch(`reviews/${review_id}`, {inc_votes})
  .then((response) => {
    return response.data.review.votes
  })
}

export default upVote;