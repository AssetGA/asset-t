import { useEffect, useState } from "react";

export function useIsIntersectingCenter(
  ref: React.RefObject<HTMLDivElement | null>
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const checkIntersection = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;

      const intersects = centerY >= rect.top && centerY <= rect.bottom;

      setIsIntersecting(intersects);
    };

    checkIntersection();
    window.addEventListener("scroll", checkIntersection);
    window.addEventListener("resize", checkIntersection);

    return () => {
      window.removeEventListener("scroll", checkIntersection);
      window.removeEventListener("resize", checkIntersection);
    };
  }, [ref]);

  return isIntersecting;
}
