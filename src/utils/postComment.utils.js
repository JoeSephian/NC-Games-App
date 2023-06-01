import axios from "axios";

const ncGamesApi = axios.create({
  baseURL: "https://nc-games-m3wy.onrender.com/api/",
});

function postComment(inputComment, review_id) {
  return ncGamesApi.post(`reviews/${review_id}/comments`, inputComment)
  .then((response) => {
    return response.data
  })
}

export default postComment;