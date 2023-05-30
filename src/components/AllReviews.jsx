import { useEffect, useState } from "react";
import getReviews from "../utils/getReviews.utils";

function AllReviews() {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    getReviews()
      .then(({ reviews }) => {
        return reviews;
      })
      .then((reviews) => {
        setAllReviews(reviews);
      });
  }, []);
  return (
    <main>
      <ul className="list">
        {allReviews.map(
          ({
            owner,
            title,
            review_id,
            category,
            review_img_url,
            created_at,
            votes,
            designer,
            comment_count,
          }) => {
            const shortenedDate = created_at.substring(0, 10)
            return (
              <li className="review" key={review_id}>
                <h2>{title}</h2>
                <h3>Review by {owner}</h3>
                <p>{category}</p>
                <img
                  className="review_image"
                  src={review_img_url}
                  alt={title}
                />
                <p>{shortenedDate}</p>
                <p>👍 {votes}</p>
                <p>{comment_count} comments</p>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
}

export default AllReviews;
