import { useEffect, useState } from "react";

/**
 * SSR-safe wrapper around prefers-reduced-motion.
 * Defaults to `false` on the server so animation markup is rendered,
 * then flips to the real preference on the client after mount.
 */
export function useReducedMotionSafe(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return reduced;
}
