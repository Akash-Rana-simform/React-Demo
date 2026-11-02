import { useMemo, useRef, useState } from "react";

// 10,000 products. Filtering them on every redraw is slow work.
const allProducts = Array.from({ length: 10000 }, (_, i) => ({ id: i + 1, price: ((i * 7919) % 5000) + 99 }));

// useMemo remembers the result of slow work. It only does the work again
// when a value in the list at the end changes.
export default function PriceFilter() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [dark, setDark] = useState(false);
  const runs = useRef(0);

  const matches = useMemo(() => {
    runs.current = runs.current + 1; // count how often the slow work runs
    return allProducts.filter((p) => p.price <= maxPrice);
  }, [maxPrice]);

  return (
    <section className={"card" + (dark ? " dark" : "")}>
      <h3>Price filter (useMemo)</h3>
      <label htmlFor="price-box">Max price (₹) for 10,000 products</label>
      <input id="price-box" type="number" className="input short" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
      <button className="btn ghost" onClick={() => setDark(!dark)}>Dark mode</button>
      <p className="hint">Dark mode redraws the card, but the filter does not run again. Changing the price does run it.</p>
      <p className="readout">products found = <b>{matches.length}</b> · filter ran <b>{runs.current}</b> times</p>
    </section>
  );
}
