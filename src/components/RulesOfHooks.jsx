// The two Rules of Hooks, with a wrong and a right example.
const wrong = `function ProductPage({ inStock }) {
  if (inStock) {
    const [qty, setQty] = useState(1); // ✗ inside an if
  }
}`;

const right = `function ProductPage({ inStock }) {
  const [qty, setQty] = useState(1); // ✓ at the top
  if (!inStock) return <p>Out of stock</p>;
}`;

export default function RulesOfHooks() {
  return (
    <section className="card">
      <h3>Rules of Hooks</h3>
      <ol className="rules">
        <li>Call hooks only at the <b>top</b> of a component. Never inside an if, a loop or another function.</li>
        <li>Call hooks only from <b>components</b> or from your own custom hooks.</li>
      </ol>
      <p className="label bad">Wrong</p>
      <pre className="tree code bad">{wrong}</pre>
      <p className="label good">Right</p>
      <pre className="tree code good">{right}</pre>
      <p className="hint">Why? React finds each hook by its order. If a hook is skipped, the order breaks.</p>
    </section>
  );
}
