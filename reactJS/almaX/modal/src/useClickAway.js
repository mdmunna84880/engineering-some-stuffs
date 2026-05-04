/** @format */

import { useEffect, useRef, useState } from "react";

export function useClickAway() {
  const [isAway, setIsAway] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsAway(true);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return { isAway, setIsAway, ref };
}