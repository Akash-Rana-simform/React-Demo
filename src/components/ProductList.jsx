import { memo, useCallback, useRef, useState } from "react";
import { PRODUCTS } from "../constants.js";
import { formatPrice } from "../utils/format.js";

// memo means: skip redrawing this card if its props did not change.
const ProductCard = memo(function ProductCard({ product, onAdd }) {
  const draws = useRef(0);
  draws.current = draws.current + 1;
  return (
    <div className="product-card">
      <b>{product.name}</b>
      <span>{formatPrice(product.price)}</span>
      <button className="btn small" onClick={onAdd}>Add to cart</button>
      <small>drawn {draws.current} times</small>
    </div>
  );
});

// useCallback keeps the SAME addToCart function between redraws.
// Without it, every redraw makes a new function, so memo cannot skip.
export default function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [useIt, setUseIt] = useState(true);

  const addToCart = useCallback(() => setCartCount((c) => c + 1), []);
  const newAddToCart = () => setCartCount((c) => c + 1);

  return (
    <section className="card">
      <h3>Product list (useCallback)</h3>
      <p className="hello">🛒 Cart: {cartCount} items</p>
      <div className="product-grid">
        {PRODUCTS.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} onAdd={useIt ? addToCart : newAddToCart} />
        ))}
      </div>
      <label className="check">
        <input type="checkbox" checked={useIt} onChange={(e) => setUseIt(e.target.checked)} />
        Use useCallback
      </label>
      <p className="hint">Adding to the cart redraws the list. With the box ticked, the cards do not draw again. Untick it and try again.</p>
    </section>
  );
}
