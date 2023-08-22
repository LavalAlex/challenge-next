import { getLocal, setLocal } from "./helpers";

const KEY = "__prefered_date";

export function preferedDate(value: boolean) {
  setLocal(KEY, value ? "text" : "value");
}
export function getPreferedDate() {
  return getLocal<"text" | "value">(KEY);
}

export function togglePreferedDate() {
  const value = getLocal<"text" | "value">(KEY);
  if (value === "text") setLocal(KEY, "value");
  else setLocal(KEY, "text");
}
