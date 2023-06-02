import { useEffect, useState } from "react";
import getCategories from "../utils/getCategorys.utils";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
      setIsLoading(false)
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <main>
      <ul className="list">
        {categories.map(
          ({
            slug,
            description
          }) => {
            return (
              <li className="category_list" key={slug}>
                <Link to={`/reviews?category=${slug}`}><h2>{slug}</h2></Link>
                <p>{description}</p>
              </li>
            );
          }
        )}
      </ul>
    </main>
  );
}

export default Categories;
