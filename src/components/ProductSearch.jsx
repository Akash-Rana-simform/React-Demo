import { useState } from "react";
import { PRODUCTS } from "../constants.js";
import { formatPrice } from "../utils/format.js";

// State can hold text too, not only numbers.
export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const results = PRODUCTS.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="card">
      <h3>Product search</h3>
      <label htmlFor="search-box">Search the shop</label>
      <input
        id="search-box"
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // runs on every letter
        placeholder="e.g. watch"
      />
      <ul className="products">
        {results.map((p) => (
          <li key={p.id}>{p.name} <span>{formatPrice(p.price)}</span></li>
        ))}
        {results.length === 0 && <li className="empty">No products found.</li>}
      </ul>
      <p className="readout">search = <b>"{search}"</b></p>
    </section>
  );
}
