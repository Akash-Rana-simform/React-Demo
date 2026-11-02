import { useState, useEffect } from "react";
import useLog from "../hooks/useLog.js";
import LogBox from "./LogBox.jsx";
import { formatCountdown } from "../utils/format.js";
import { DEAL_SECONDS } from "../constants.js";

function Countdown({ onLog }) {
  const [seconds, setSeconds] = useState(DEAL_SECONDS);

  useEffect(() => {
    onLog("Product page opened: countdown started");
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);

    // This is the cleanup. It runs when the countdown leaves the screen.
    return () => {
      clearInterval(id);
      onLog("Left the product page: cleanup stopped the countdown");
    };
  }, [onLog]);

  return <p className="clock">Deal ends in {formatCountdown(seconds)}</p>;
}

export default function DealCountdown() {
  const [onProductPage, setOnProductPage] = useState(true);
  const { lines, add, clear } = useLog();

  return (
    <section className="card">
      <h3>2. Cleanup</h3>
      <div className="clockbox">
        {onProductPage ? <Countdown onLog={add} /> : <p className="empty">You are on the cart page. No countdown here.</p>}
      </div>
      <button className="btn" onClick={() => setOnProductPage(!onProductPage)}>
        {onProductPage ? "Go to cart" : "Back to the product"}
      </button>
      <LogBox lines={lines} onClear={clear} />
    </section>
  );
}
