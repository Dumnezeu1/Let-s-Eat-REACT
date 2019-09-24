import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(url)
          .then(resp => resp.json())
          .then(res => {
            setResult(res[0]);
          });
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [url]);

  return result;
};

export function useClickOutside(ref) {
  const [clickOutside, setClickOutside] = useState(null);

  useEffect(() => {
    function handleClickOutside(event) {
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
