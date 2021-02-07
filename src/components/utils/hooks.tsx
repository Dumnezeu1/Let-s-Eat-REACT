import { useState, useEffect } from "react";

export function useClickOutside(ref: any) {
  const [clickOutside, setClickOutside] = useState(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClickOutside(ref);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return clickOutside;
}
