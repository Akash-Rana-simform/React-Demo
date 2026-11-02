import { useState, useCallback } from "react";

// A small custom hook of our own.
// It keeps the last few messages so the screen can show what an effect did.
export default function useLog() {
  const [lines, setLines] = useState([]);

  const add = useCallback((text) => {
    console.log(text); // also visible in the browser console (F12)
    setLines((old) => [text, ...old].slice(0, 6));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  return { lines, add, clear };
}
