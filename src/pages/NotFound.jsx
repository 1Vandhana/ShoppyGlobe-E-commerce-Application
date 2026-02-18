import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="notfound">
      <h1>404</h1>
      <p>
        The page <strong>{location.pathname}</strong> does not exist.
      </p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default NotFound;

