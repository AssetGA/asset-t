// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { useHeadingTransform } from "../hook/useHeadingTransform";

// const headings = ["Эмоции", "Реакция", "Ответ", "Страсть"];

// export default function AnimatedHeading() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//     mass: 1,
//   });

//   const transforms = useHeadingTransform(smoothProgress, headings.length);
//   console.log("transforms", transforms);
//   return (
//     <div className="relative min-h-[300vh] mt-72" ref={containerRef}>
//       <div className="sticky top-1/3 h-[200px] flex items-center justify-center overflow-hidden">
//         <div className="relative h-[200px] w-full">
//           {headings.map((text, index) => (
//             <motion.h2
//               key={index}
//               style={{
//                 y: transforms[index].y,
//                 opacity: transforms[index].opacity,
//               }}
//               className="absolute w-full text-center text-4xl md:text-6xl lg:text-7xl font-bold text-black drop-shadow-lg"
//             >
//               {text}
//             </motion.h2>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
