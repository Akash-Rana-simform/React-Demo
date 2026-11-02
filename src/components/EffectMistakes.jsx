import { useState, useEffect, useRef } from "react";

// Three effects that differ only in the list at the end.
// Each one writes how many times it ran straight into the page,
// so counting does not cause another redraw.
export default function EffectMistakes() {
  const [category, setCategory] = useState(0);
  const [wishlist, setWishlist] = useState(0);
  const noList = useRef(null);
  const emptyList = useRef(null);
  const withCategory = useRef(null);

  useEffect(() => {
    noList.current.textContent = Number(noList.current.textContent) + 1;
  }); // no list: runs after EVERY redraw

  useEffect(() => {
    emptyList.current.textContent = Number(emptyList.current.textContent) + 1;
  }, []); // empty list: runs once

  useEffect(() => {
    withCategory.current.textContent = Number(withCategory.current.textContent) + 1;
  }, [category]); // runs when category changes

  return (
    <section className="card">
      <h3>4. Common mistakes</h3>
      <div className="row">
        <button className="btn" onClick={() => setCategory(category + 1)}>Change category ({category})</button>
        <button className="btn ghost" onClick={() => setWishlist(wishlist + 1)}>Add to wishlist ({wishlist})</button>
      </div>
      <table className="runs">
        <tbody>
          <tr><td><code>useEffect(fn)</code></td><td>ran <b ref={noList}>0</b> times</td></tr>
          <tr><td><code>useEffect(fn, [])</code></td><td>ran <b ref={emptyList}>0</b> times</td></tr>
          <tr><td><code>useEffect(fn, [category])</code></td><td>ran <b ref={withCategory}>0</b> times</td></tr>
        </tbody>
      </table>
      <ul className="rules">
        <li><b>No list</b> runs after every redraw. If the effect loads products and saves them in state, it never stops (endless loop).</li>
        <li><b>Missing a value</b> in the list means the effect uses an old value: the user picks Bags but still sees Shoes.</li>
        <li><b>No cleanup</b> leaves timers running after the component is gone, like a deal countdown that never stops.</li>
      </ul>
    </section>
  );
}
