import { useEffect, useState } from "react";

export function useWindowHeight() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
}
