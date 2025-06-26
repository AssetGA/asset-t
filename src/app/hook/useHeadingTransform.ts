"use client";

import { useTransform, MotionValue } from "framer-motion";

type Transform = {
  y: MotionValue<string>;
  opacity: MotionValue<number>;
};

export function useHeadingTransform(
  progress: MotionValue<number>
): Transform[] {
  const y0 = useTransform(progress, [0 / 4, 1 / 4], ["100%", "0%"]);
  const o0 = useTransform(progress, [0 / 4, 0.15, 1 / 4], [0, 1, 0]);

  const y1 = useTransform(progress, [1 / 4, 2 / 4], ["100%", "0%"]);
  const o1 = useTransform(progress, [1 / 4, 1.4 / 4, 2 / 4], [0, 1, 0]);

  const y2 = useTransform(progress, [2 / 4, 3 / 4], ["100%", "0%"]);
  const o2 = useTransform(progress, [2 / 4, 2.4 / 4, 3 / 4], [0, 1, 0]);

  const y3 = useTransform(progress, [3 / 4, 4 / 4], ["100%", "0%"]);
  const o3 = useTransform(progress, [3 / 4, 3.4 / 4, 4 / 4], [0, 1, 0]);

  return [
    { y: y0, opacity: o0 },
    { y: y1, opacity: o1 },
    { y: y2, opacity: o2 },
    { y: y3, opacity: o3 },
  ];
}
