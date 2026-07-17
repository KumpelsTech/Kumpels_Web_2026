import { motion, type HTMLMotionProps, type Transition } from "framer-motion";
import { useReducedMotionSafe } from "./useReducedMotionSafe";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "span" | "li" | "section" | "article" | "p" | "h1" | "h2" | "h3" | "h4";
  className?: string;
  amount?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "as">;

/**
 * Scroll-triggered reveal. Always falls back to a fully-visible static
 * state when prefers-reduced-motion is set — content is never hidden.
 */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  blur = 10,
  duration = 0.75,
  once = true,
  as = "div",
  amount = 0.2,
  className,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotionSafe();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    const StaticTag = as as "div";
    return (
      <StaticTag className={className} {...(rest as Record<string, unknown>)}>
        {children}
      </StaticTag>
    );
  }

  const transition: Transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <MotionTag
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Word-by-word reveal for headlines. Splits on whitespace, preserves
 * newlines via explicit <br/> in `lines`.
 */
export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotionSafe();
  const words = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
