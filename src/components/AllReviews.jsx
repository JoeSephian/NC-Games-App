import { useEffect, useState } from "react";
import getReviews from "../utils/getReviews.utils";
import { Link, useSearchParams } from "react-router-dom";

function AllReviews() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("sort-date-desc");
  useEffect(() => {
    getReviews(searchParams).then(({ reviews }) => {
      const sortedReviews = [...reviews];
      if (sortOption === "newest-oldest") {
        sortedReviews.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
      } else if (sortOption === "oldest-newest") {
        sortedReviews.sort(
          (a, b) => new Date(a.created_at) - new Date(b.created_at)
        );
      } else if (sortOption === "most-comments") {
        sortedReviews.sort((a, b) => b.comment_count - a.comment_count);
      } else if (sortOption === "least-comments") {
        sortedReviews.sort((a, b) => a.comment_count - b.comment_count);
      } else if (sortOption === "most-votes") {
        sortedReviews.sort((a, b) => b.votes - a.votes);
      } else if (sortOption === "least-votes") {
        sortedReviews.sort((a, b) => a.votes - b.votes);
      }
      setAllReviews(sortedReviews);
      setIsLoading(false);
    });
  }, [searchParams, sortOption]);

  const handleSortChange = (event) => {
    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("sort", event.target.value);
    const currentCategory = currentParams.get("category");
    if (currentCategory) {
      currentParams.set("category", currentCategory);
    }
    setSearchParams(currentParams.toString());
    setSortOption(event.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <main>
      <select name="sort-reviews" id="sort-reviews" onChange={handleSortChange}>
        <option value="newest-oldest">Newest First</option>
        <option value="oldest-newest">Oldest First</option>
        <option value="most-comments">Most Comments First</option>
        <option value="least-comments">Least Comments First</option>
        <option value="most-votes">Most Votes First</option>
        <option value="least-votes">Least Votes First</option>
      </select>
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
                <Link to={`/reviews/${review_id}`}>
                  <h2>{title}</h2>
                </Link>
                <h3>Review by {owner}</h3>
                <Link to={`/reviews?category=${category}`}>
                  <p>{category}</p>
                </Link>
                <Link to={`/reviews/${review_id}`}>
                <img
                  className="review_image"
                  src={review_img_url}
                  alt={title}
                />
                </Link>
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
