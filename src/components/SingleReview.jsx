import getSingleReview from "../utils/getSingleReview.utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import upVote from "../utils/upVote.utils";
import Comments from "./Comments";
import AddComment from "./AddComment";

function SingleReview() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [reviewVotes, setReviewVotes] = useState(0);
  const [isError, setIsError] = useState(false)
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

  useEffect(() => {
    if (singleReview.votes !== undefined) {
      setReviewVotes(singleReview.votes);
    }
  }, [singleReview]);

  useEffect(() => {
    getSingleReview(review_id)
      .then((review) => {
        setSingleReview(review);
        setReviewVotes(votes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching single review", error);
      });
  }, [review_id]);

  function handleClick() {
    setReviewVotes((currentVotes) => currentVotes + 1);
    setIsError(false)
    upVote(1, review_id)
    .catch(() => {
      setReviewVotes((currentVotes) => currentVotes - 1)
      setIsError(true)
    })
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const shortenedDate = created_at ? created_at.substring(0, 10) : "";

  return (
    <main>
      <ul className="single_list">
        <li className="single_review">
          <h2>'{title}' by {owner} on {shortenedDate}</h2>
          <p>{category}</p>
          <p>Designed by {designer}</p>
          <img className="single_review_image" src={review_img_url} alt={title} />
          <p>{review_body}</p>
          <p>{shortenedDate}</p>
          <button className="upvote-button" onClick={handleClick}>👍 {reviewVotes}</button>
          {isError ? (
            <p>Something went wrong! Refresh the page and try again</p>
          ) : null}
          <h3 className="comments_header">Comments</h3>
          <AddComment />
          <Comments /> 
        </li>
      </ul>
    </main>
  );
}

export default SingleReview;
