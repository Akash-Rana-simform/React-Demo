// Shows the messages that useLog collected.
export default function LogBox({ lines, onClear }) {
  return (
    <div className="logbox">
      <div className="logbox-head">
        <span>What the effect did</span>
        <button className="btn ghost small" onClick={onClear}>Clear</button>
      </div>
      {lines.length === 0 ? (
        <p className="empty">Nothing yet.</p>
      ) : (
        <ol>
          {lines.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ol>
      )}
    </div>
  );
}
