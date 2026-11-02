import { useRef, useState } from "react";

// useRef points to something on the screen, or keeps a value without redrawing.
export default function CheckoutForm() {
  const pinRef = useRef(null); // will point to the pin code <input> below
  const swipes = useRef(0); // a memory that does NOT redraw the screen
  const [message, setMessage] = useState("");
  const [shown, setShown] = useState(0);

  function placeOrder() {
    const pin = pinRef.current.value;
    if (!/^\d{6}$/.test(pin)) {
      setMessage("Please enter a 6-digit pin code.");
      pinRef.current.focus(); // jump the cursor to the wrong box
    } else {
      setMessage("Order placed!");
    }
  }

  return (
    <section className="card">
      <h3>Checkout (useRef)</h3>
      <input className="input" placeholder="Full name" />
      <input ref={pinRef} className="input short" placeholder="Pin code" />
      <button className="btn" onClick={placeOrder}>Place order</button>
      {message && <p className="hint"><b>{message}</b></p>}

      <div className="row">
        <button className="btn ghost" onClick={() => (swipes.current = swipes.current + 1)}>Swipe product photo</button>
        <button className="btn ghost" onClick={() => setShown(swipes.current)}>Show swipes</button>
      </div>
      <p className="hint">Swipe a few times. The screen does not change, because a ref does not redraw. Then press “Show swipes”.</p>
      <p className="readout">swipes.current = <b>{shown}</b></p>
    </section>
  );
}
