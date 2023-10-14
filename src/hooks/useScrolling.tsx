import { useEffect, useState } from "react";

export default function useScrolling(top: number = 100) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | "">(
    ""
  );

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

  useEffect(() => {
    // Function to handle the wheel event
    function handleScroll(event: WheelEvent) {
      if (event.deltaY > 0) {
        setScrollDirection("down");
      } else if (event.deltaY < 0) {
        setScrollDirection("up");
      }
    }

    // Attach the event listener when the component mounts
    window.addEventListener("wheel", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return { isScrolling, scrollDirection };
}
