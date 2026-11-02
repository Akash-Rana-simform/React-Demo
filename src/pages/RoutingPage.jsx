import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import PlainWords from "../components/PlainWords.jsx";
import { CATEGORIES, PRODUCTS } from "../constants.js";
import { capitalize, formatPrice } from "../utils/format.js";

export default function RoutingPage() {
  const { pathname, search } = useLocation();
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const shown = category ? PRODUCTS.filter((p) => p.category === category) : [];
  const navigate = useNavigate();

  // useNavigate changes the page from code, for example after payment.
  function payNow() {
    navigate("/order-success");
  }

  return (
    <>
      <h1>3 · Routing</h1>
      <PlainWords file="src/App.jsx, pages/ProductPage.jsx, pages/AccountLayout.jsx, pages/NotFound.jsx">
        Routing means: this web address shows this page. The menu at the top is already using it. Watch the address bar of your browser.
      </PlainWords>

      <section className="card">
        <h3>The address right now</h3>
        <p className="readout"><b>{pathname + search}</b></p>
      </section>

      <div className="grid">
        <section className="card">
          <h3>A changing part</h3>
          <p className="hint">The route is <code>/product/:id</code>. One product page, a different id.</p>
          <div className="row">
            <Link className="btn" to="/product/101">/product/101</Link>
            <Link className="btn" to="/product/202">/product/202</Link>
          </div>
        </section>

        <section className="card">
          <h3>A filter in the address</h3>
          <p className="hint">Press a category and watch <code>?category=</code> appear in the address bar.</p>
          <div className="row">
            {CATEGORIES.map((c) => (
              <button key={c} className="btn ghost" onClick={() => setParams({ category: c })}>{capitalize(c)}</button>
            ))}
          </div>
          <ul className="products">
            {shown.map((p) => (
              <li key={p.id}>{p.name} <span>{formatPrice(p.price)}</span></li>
            ))}
          </ul>
          <p className="readout">category = <b>{category ?? "nothing yet"}</b></p>
        </section>

        <section className="card">
          <h3>Nested routes</h3>
          <p className="hint">One page inside another. My Account keeps its title and menu. The section below changes.</p>
          <Link className="btn" to="/account">Open /account</Link>
        </section>

        <section className="card">
          <h3>Go to a page from code</h3>
          <p className="hint">Press Pay. The code calls <code>navigate("/order-success")</code>. You do not click a link.</p>
          <p className="product-line">Running Shoes · {formatPrice(1999)}</p>
          <button className="btn" onClick={payNow}>Pay {formatPrice(1999)}</button>
        </section>

        <section className="card">
          <h3>A wrong address</h3>
          <p className="hint">An old link to a sale page that does not exist any more.</p>
          <Link className="btn ghost" to="/sale-2019">/sale-2019</Link>
        </section>
      </div>
    </>
  );
}
