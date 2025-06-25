// "use client";

// import { useMemo } from "react";
// import { useTransform, MotionValue } from "framer-motion";

// type Transform = {
//   y: MotionValue<string>;
//   opacity: MotionValue<number>;
// };

// export function useHeadingTransform(
//   progress: MotionValue<number>,
//   count: number
// ): Transform[] {
//   // Создаём массив индексов заранее с фиксированной длиной
//   const indices = useMemo(
//     () => Array.from({ length: count }, (_, i) => i),
//     [count]
//   );

//   // Теперь вызываем useTransform фиксированное число раз
//   const transforms = indices.map((i) => {
//     const start = i / count;
//     const end = (i + 1) / count;

//     const y = useTransform(progress, [start, end], ["100%", "0%"]);
//     const opacity = useTransform(progress, [start, end - 0.1, end], [0, 1, 0]);

//     return { y, opacity };
//   });

//   return transforms;
// }
