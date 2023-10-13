import { useEffect, useState } from "react";

export default function useScrolling(top: number = 100) {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > top) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [top]);

  return { isScrolling };
}
