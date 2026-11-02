// Small helper functions. No React here, only plain JavaScript.

// 1999 → "₹1,999"
export function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

// 299 seconds → "04:59"
export function formatCountdown(seconds) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return mm + ":" + ss;
}

export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
