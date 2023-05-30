import axios from "axios";

const ncGamesApi = axios.create({
    baseURL: "https://nc-games-m3wy.onrender.com/api/"
});

function getReviews() {
    return ncGamesApi.get("reviews").then((result) => {
        return result.data
    })
}

export default getReviews