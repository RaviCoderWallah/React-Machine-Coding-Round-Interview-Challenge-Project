import { useState } from "react";

export default function useTheme(){
  const [theme, setTheme] = useState(true);
  const toggle = () => setTheme((prev) => !prev);
  return [theme, toggle]
}