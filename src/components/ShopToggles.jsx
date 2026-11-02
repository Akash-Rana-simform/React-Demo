import useToggle from "../hooks/useToggle.js";

// The same custom hook, used two times. Each use has its own memory.
export default function ShopToggles() {
  const [showFilters, toggleFilters] = useToggle(false);
  const [showSizes, toggleSizes] = useToggle(false);

  return (
    <section className="card">
      <h3>Custom hook</h3>
      <div className="row">
        <button className="btn" onClick={toggleFilters}>{showFilters ? "Hide" : "Show"} filters</button>
        <button className="btn" onClick={toggleSizes}>{showSizes ? "Hide" : "Show"} size chart</button>
      </div>
      {showFilters && <p className="panel">Filters: Brand · Price · Rating</p>}
      {showSizes && <p className="panel">Sizes: S = 36 · M = 38 · L = 40 · XL = 42</p>}
      <p className="hint">Both buttons use <code>useToggle</code> from <code>src/hooks/useToggle.js</code>.</p>
      <p className="readout">showFilters = <b>{String(showFilters)}</b> · showSizes = <b>{String(showSizes)}</b></p>
    </section>
  );
}
