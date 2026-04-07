"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const control = animate(0, value, {
      duration: 1.4,
      onUpdate: (latest) => setCount(Math.round(latest))
    });
    return () => control.stop();
  }, [isInView, value]);

  return (
    <motion.span ref={ref}>
      {count}
      {suffix}
    </motion.span>
  );
}
