// The green box at the top of each page. One sentence in simple words.
export default function PlainWords({ children, file }) {
  return (
    <div className="plain">
      <span className="eyebrow">In plain words</span>
      <p>{children}</p>
      {file && <p className="where">Code: <code>{file}</code></p>}
    </div>
  );
}
