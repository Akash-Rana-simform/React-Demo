import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="notfound">
      <span className="big">404</span>
      <h1>Page not found</h1>
      <p className="lead">Nothing matches <code>{pathname}</code>, so the star route showed this page. Maybe this sale is over.</p>
      <Link className="btn" to="/routing">Back to shop</Link>
    </div>
  );
}
