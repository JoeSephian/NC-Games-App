import { useEffect, useState } from "react";
import getReviews from "../utils/getReviews.utils";
import { Link } from "react-router-dom";

function AllReviews() {
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setAllReviews(reviews);
      setIsLoading(false)
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
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
            const shortenedDate = created_at.substring(0, 10);
            return (
              <li className="review_list" key={review_id}>
                <Link to={`/reviews/${review_id}`}><h2>{title}</h2></Link>
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
