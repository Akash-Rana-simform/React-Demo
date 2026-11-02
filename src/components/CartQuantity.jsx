import { useState } from "react";
import { formatPrice } from "../utils/format.js";
import { FREE_DELIVERY_LIMIT } from "../constants.js";

const product = { name: "Cotton T-shirt", price: 299 };

// useState gives this component a memory: how many T-shirts are in the cart.
export default function CartQuantity() {
  // quantity is the value. setQuantity is the only way to change it.
  const [quantity, setQuantity] = useState(1);
  const total = product.price * quantity;
  const missing = FREE_DELIVERY_LIMIT - total;

  return (
    <section className="card">
      <h3>Cart quantity</h3>
      <p className="product-line">{product.name} · {formatPrice(product.price)} each</p>
      <div className="row">
        <button className="btn ghost" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
        <span className="bignum">{quantity}</span>
        <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <p className="hello">Total: {formatPrice(total)}</p>
      <p className="hint">{missing > 0 ? `Add ${formatPrice(missing)} more for free delivery.` : "You get free delivery!"}</p>
      <p className="readout">quantity = <b>{quantity}</b></p>
    </section>
  );
}
