import { useState, useEffect } from "react";
import useLog from "../hooks/useLog.js";
import LogBox from "./LogBox.jsx";
import { CATEGORIES } from "../constants.js";
import { capitalize } from "../utils/format.js";

// The list at the end of useEffect says when to run it again.
export default function CategoryLoader() {
  const [category, setCategory] = useState("shoes");
  const [wishlist, setWishlist] = useState(0);
  const { lines, add, clear } = useLog();

  useEffect(() => {
    add("Loaded products for " + category);
  }, [category, add]); // run again only when category changes

  return (
    <section className="card">
      <h3>1. Load on change</h3>
      <div className="row">
        {CATEGORIES.map((c) => (
          <button key={c} className={"btn ghost tab" + (c === category ? " active" : "")} onClick={() => setCategory(c)}>
            {capitalize(c)}
          </button>
        ))}
      </div>
      <button className="btn ghost" onClick={() => setWishlist(wishlist + 1)}>♡ Add to wishlist ({wishlist})</button>
      <p className="hint">Press “Add to wishlist”. Nothing is loaded, because the effect only watches category.</p>
      <LogBox lines={lines} onClear={clear} />
    </section>
  );
}
