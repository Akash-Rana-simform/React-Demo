import { Link, NavLink, Outlet } from "react-router-dom";

// The parent page of a nested route. The title and the menu stay.
// <Outlet /> is the hole where the child page appears.
export default function AccountLayout() {
  return (
    <>
      <h1>My Account</h1>
      <p className="lead">This title and menu stay. Only the box below changes. Watch the address bar.</p>
      <div className="row">
        <NavLink to="/account/orders" className="btn ghost tab">Orders</NavLink>
        <NavLink to="/account/addresses" className="btn ghost tab">Addresses</NavLink>
        <NavLink to="/account/wishlist" className="btn ghost tab">Wishlist</NavLink>
      </div>
      <section className="card outlet">
        <Outlet />
      </section>
      <Link className="btn" to="/routing">← Back to Routing</Link>
    </>
  );
}

// Child page for /account (nothing picked yet).
export function PickASection() {
  return <p className="empty">Pick a section above.</p>;
}

// Child page for /account/orders
export function Orders() {
  return (
    <ul className="products">
      <li>#5001 Running Shoes <span>Delivered</span></li>
      <li>#5002 Laptop Bag <span>Out for delivery</span></li>
    </ul>
  );
}

// Child page for /account/addresses
export function Addresses() {
  return <p>Home: 12 MG Road, Bengaluru 560001</p>;
}

// Child page for /account/wishlist
export function Wishlist() {
  return (
    <ul className="products">
      <li>Smart Watch <span>₹4,999</span></li>
    </ul>
  );
}
