import { useState, useEffect } from "react";
import { FAKE_SERVER_DELAY_MS, PRODUCTS } from "../constants.js";
import { formatPrice } from "../utils/format.js";

// A real shop asks a server for products. This fake server answers after 1.2 seconds.
// The screen has three cases: loading, ok and error.
export default function LoadProducts() {
  const [attempt, setAttempt] = useState(0);
  const [fail, setFail] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | ok | error

  useEffect(() => {
    if (attempt === 0) return; // before the first click, do nothing
    setStatus("loading");
    const timer = setTimeout(() => setStatus(fail ? "error" : "ok"), FAKE_SERVER_DELAY_MS);
    return () => clearTimeout(timer);
  }, [attempt]); // run again each time the button is pressed

  const messages = {
    idle: "Press the button to load products.",
    loading: "Loading products…",
    ok: "3 products loaded.",
    error: "Could not load products. Try again.",
  };

  return (
    <section className="card">
      <h3>3. Loading data</h3>
      <div className="row">
        <button className="btn" onClick={() => setAttempt(attempt + 1)}>Load products</button>
        <label className="check">
          <input type="checkbox" checked={fail} onChange={(e) => setFail(e.target.checked)} />
          Server is down
        </label>
      </div>
      <div className={"status " + status}>{messages[status]}</div>
      {status === "ok" && (
        <ul className="products">
          {PRODUCTS.slice(0, 3).map((p) => (
            <li key={p.id}>{p.name} <span>{formatPrice(p.price)}</span></li>
          ))}
        </ul>
      )}
      <p className="readout">status = <b>"{status}"</b></p>
    </section>
  );
}
