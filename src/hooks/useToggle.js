import { useState } from "react";

// A custom hook is a normal function whose name starts with "use"
// and which calls other hooks inside. Write it once, use it anywhere.
export default function useToggle(start = false) {
  const [on, setOn] = useState(start);
  const toggle = () => setOn((old) => !old);
  return [on, toggle];
}
