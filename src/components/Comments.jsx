import getComments from "../utils/getComments.utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Comments() {
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching comments", error);
      });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (comments === undefined) {
    return (
      <main>
        <h2>No comments</h2>
      </main>
    );
  } else {
    return (
      <main>
        <ul className="comments_list">
          {comments.map(
            ({ comment_id, body, review_id, author, votes, created_at }) => {
              const shortenedDate = created_at.substring(0, 10);
              return (
                <li className="comments_list_item" key={comment_id}>
                  <p>{body}</p>
                  <p>{author}</p>
                  <p>👍 {votes}</p>
                  <p>{shortenedDate}</p>
                </li>
              );
            }
          )}
        </ul>
      </main>
    );
  }
}

export default Comments;
