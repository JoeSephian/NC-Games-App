import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from "../context/UserContext";

function Nav() {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/categories">Categories</Link>
      <Link className="nav-link" to="/login">Login</Link>
      <span>Logged in as {user}</span>
    </nav>
  );
}

export default Nav;
