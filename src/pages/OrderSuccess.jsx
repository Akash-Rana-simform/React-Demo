import { Link } from "react-router-dom";

// The page that navigate("/order-success") opens after payment.
export default function OrderSuccess() {
  return (
    <div className="notfound">
      <span className="big">✓</span>
      <h1>Order placed!</h1>
      <p className="lead">The code moved you here after payment. You did not click a link.</p>
      <Link className="btn" to="/routing">Continue shopping</Link>
    </div>
  );
}
