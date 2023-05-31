import getSingleReview from "../utils/getSingleReview.utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleReview(review_id)
      .then((review) => {
        setSingleReview(review);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching single review", error);
      });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const {
    title,
    category,
    designer,
    owner,
    review_body,
    review_img_url,
    created_at,
    votes,
  } = singleReview;

  const shortenedDate = created_at.substring(0, 10);

  return (
    <main>
      <ul className="list">
        <li className="single_review">
          <h2>{title}</h2>
          <h3>Review by {owner}</h3>
          <p>{category}</p>
          <p>Designed by {designer}</p>
          <img className="review_image" src={review_img_url} alt={title} />
          <p>{review_body}</p>
          <p>{shortenedDate}</p>
          <p>👍 {votes}</p>
        </li>
      </ul>
    </main>
  );
}

export default SingleReview;
