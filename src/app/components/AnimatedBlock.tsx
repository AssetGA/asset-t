"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsIntersectingCenter } from "../hook/useIsIntersectingCenter";

export default function AnimatedBlock() {
  const blockRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIsIntersectingCenter(blockRef);
  console.log("0000", blockRef, isIntersecting);
  return (
    <div className="h-[10vh] flex items-center justify-center">
      <motion.div
        ref={blockRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isIntersecting
            ? { opacity: 1, scale: 1 }
            : { opacity: 0.5, scale: 0.9 }
        }
        transition={{ duration: 1 }}
        className=" rounded-xl flex items-center justify-center text-xl font-semibold shadow-xl"
      >
        Центр экрана!
      </motion.div>
    </div>
  );
}
