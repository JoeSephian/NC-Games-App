import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import postComment from "../utils/postComment.utils";

function AddComment() {
  const [inputComment, setInputComment] = useState("");
  const [isError, setIsError] = useState(false);
  const [newestComment, setNewestComment] = useState([]);
  const { user } = useContext(UserContext);
  const { review_id } = useParams();

  function handleSubmit(event) {
    event.preventDefault();

    if (inputComment.trim() === "") {
      setIsError(true);
      return;
    }

    const newComment = {
      body: inputComment,
      author: user,
    };
    setInputComment("");
    postComment(newComment, review_id)
      .then((response) => {
        const comment = response.comment;
        setNewestComment((prevComments) => [comment, ...prevComments ]);
        setIsError(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }

  return (
    <main>
      <form>
        <textarea
        className="comment-entry"
          type="text"
          name="comment-text"
          placeholder="add a comment..."
          value={inputComment}
          onChange={(event) => {
            setInputComment(event.target.value);
          }}
        />
        <br />
        <button className="comment-button" type="submit" value="Submit" onClick={handleSubmit}>
          Submit
        </button>
        {isError ? (
          <p className="error">
            Something went wrong! Ensure you're logged in as a valid user and
            have entered a comment.
          </p>
        ) : null}
      </form>
      {newestComment.map((comment) => (
        <div className="new-comment" key={comment.id}>
          <p>{comment.body}</p>
          <p>{comment.author}</p>
          <p>👍 {comment.votes}</p>
          <p>{comment.created_at.slice(0, 10)}</p>
        </div>
      ))}
    </main>
  );
}

export default AddComment;
