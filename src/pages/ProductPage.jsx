import { Link, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../constants.js";
import { formatPrice } from "../utils/format.js";

export default function ProductPage() {
  // useParams reads the changing part of the address.
  // For /product/101, id is "101".
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => String(p.id) === id);

  return (
    <>
      {product ? (
        <>
          <h1>{product.name}</h1>
          <p className="lead">{formatPrice(product.price)} · id <b>{id}</b> came from the web address.</p>
        </>
      ) : (
        <h1>No product with id {id}</h1>
      )}
      <p>One ProductPage works for every product. Change the address bar to <code>/product/301</code> and press Enter.</p>
      <div className="row">
        <Link className="btn" to="/routing">← Back to Routing</Link>
        {/* navigate(-1) works like the browser back button */}
        <button className="btn ghost" onClick={() => navigate(-1)}>Go back one page</button>
      </div>
    </>
  );
}
