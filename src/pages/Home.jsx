import { Link } from "react-router-dom";

const topics = [
  { to: "/hooks", title: "1 · Hooks", text: "Cart quantity, product search, checkout, price filter and product cards." },
  { to: "/effects", title: "2 · Effects", text: "Load products by category, a deal countdown, loading and error screens." },
  { to: "/routing", title: "3 · Routing", text: "Product pages, category filters, My Account, and the page after payment." },
  { to: "/structure", title: "4 · Structure", text: "Where a shop keeps its pages, components, hooks, utilities and constants." },
];

export default function Home() {
  return (
    <>
      <h1>React Shop Demo</h1>
      <p className="lead">Every example is a small piece of an online shop. Pick a topic, press the buttons, then open the file named on the page to read the code.</p>
      <div className="grid">
        {topics.map((t) => (
          <Link key={t.to} to={t.to} className="topic">
            <strong>{t.title}</strong>
            <span>{t.text}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
