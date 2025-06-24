"use client";

import { useTransform, MotionValue } from "framer-motion";

export function useHeadingTransform(
  progress: MotionValue<number>,
  count: number
) {
  // Объявляем массив сразу нужной длины
  const transforms: { y: MotionValue<string>; opacity: MotionValue<number> }[] =
    [];

  // Вызываем useTransform на верхнем уровне, НЕЛЬЗЯ в map/callback
  for (let i = 0; i < count; i++) {
    const start = i / count;
    const end = (i + 1) / count;

    const y = useTransform(progress, [start, end], ["100%", "0%"]);
    const opacity = useTransform(progress, [start, end - 0.1, end], [0, 1, 0]);

    transforms.push({ y, opacity });
  }

  return transforms;
}
