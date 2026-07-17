import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotionSafe } from "./useReducedMotionSafe";

/**
 * Scroll-linked Y parallax. `speed` is the fraction of scroll travel
 * the element moves opposite to scroll direction — keep small (0.05–0.2).
 */
export function Parallax({
  children,
  speed = 0.1,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80 * speed, -80 * speed]);

  return (
    <div ref={ref} className={className}>
      {reduced ? <>{children}</> : <motion.div style={{ y }}>{children}</motion.div>}
    </div>
  );
}
